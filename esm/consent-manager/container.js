import EventEmitter from 'events';
import React from 'react';
import Banner from './banner';
import PreferenceDialog from './preference-dialog';
import CancelDialog from './cancel-dialog';
import { ADVERTISING_CATEGORIES, FUNCTIONAL_CATEGORIES } from './categories';
var emitter = new EventEmitter();
export function openDialog() {
    emitter.emit('openDialog');
}
function normalizeDestinations(destinations) {
    var marketingDestinations = [];
    var advertisingDestinations = [];
    var functionalDestinations = [];
    var _loop_1 = function (destination) {
        if (ADVERTISING_CATEGORIES.find(function (c) { return c === destination.category; })) {
            advertisingDestinations.push(destination);
        }
        else if (FUNCTIONAL_CATEGORIES.find(function (c) { return c === destination.category; })) {
            functionalDestinations.push(destination);
        }
        else {
            // Fallback to marketing
            marketingDestinations.push(destination);
        }
    };
    for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
        var destination = destinations_1[_i];
        _loop_1(destination);
    }
    return { marketingDestinations: marketingDestinations, advertisingDestinations: advertisingDestinations, functionalDestinations: functionalDestinations };
}
var Container = function (props) {
    var _a = React.useState(false || (props.workspaceAddedNewDestinations && props.defaultDestinationBehavior === 'ask')), isDialogOpen = _a[0], toggleDialog = _a[1];
    var _b = React.useState(true), showBanner = _b[0], toggleBanner = _b[1];
    var _c = React.useState(false), isCancelling = _c[0], toggleCancel = _c[1];
    var banner = React.useRef(null);
    var preferenceDialog = React.useRef(null);
    var cancelDialog = React.useRef(null);
    var _d = normalizeDestinations(props.destinations), marketingDestinations = _d.marketingDestinations, advertisingDestinations = _d.advertisingDestinations, functionalDestinations = _d.functionalDestinations;
    var onAcceptAll = function () {
        var truePreferences = props.preferences;
        for (var _i = 0, _a = Object.keys(props.preferences); _i < _a.length; _i++) {
            var preferenceName = _a[_i];
            var value = props.preferences[preferenceName];
            if (typeof value === 'string') {
                truePreferences[preferenceName] = value;
            }
            else {
                truePreferences[preferenceName] = true;
            }
        }
        props.setPreferences(truePreferences);
        return props.saveConsent();
    };
    var onDenyAll = function () {
        var falsePreferences = props.preferences;
        for (var _i = 0, _a = Object.keys(props.preferences); _i < _a.length; _i++) {
            var preferenceName = _a[_i];
            var value = props.preferences[preferenceName];
            if (typeof value === 'string') {
                falsePreferences[preferenceName] = value;
            }
            else {
                falsePreferences[preferenceName] = false;
            }
        }
        props.setPreferences(falsePreferences);
        return props.saveConsent();
    };
    var onClose = function () {
        if (props.closeBehavior === undefined || props.closeBehavior === 'dismiss') {
            return toggleBanner(false);
        }
        if (props.closeBehavior === 'accept') {
            toggleBanner(false);
            return onAcceptAll();
        }
        if (props.closeBehavior === 'deny') {
            toggleBanner(false);
            return onDenyAll();
        }
        // closeBehavior is a custom function
        var customClosePreferences = props.closeBehavior(props.preferences);
        props.setPreferences(customClosePreferences);
        props.saveConsent();
        return toggleBanner(false);
    };
    var showDialog = function () { return toggleDialog(true); };
    var handleBodyClick = function (e) {
        // Do nothing if no new implicit consent needs to be saved
        if (!props.isConsentRequired ||
            !props.implyConsentOnInteraction ||
            props.newDestinations.length === 0) {
            return;
        }
        // Ignore propogated clicks from inside the consent manager
        if ((banner.current && banner.current.contains(e.target)) ||
            (preferenceDialog.current && preferenceDialog.current.contains(e.target)) ||
            (cancelDialog.current && cancelDialog.current.contains(e.target)) ||
            'subContentBtn' === e.target.id) {
            return;
        }
        // Accept all consent on page interaction.
        if (!isDialogOpen && props.implyConsentOnInteraction) {
            onAcceptAll();
        }
    };
    React.useEffect(function () {
        emitter.on('openDialog', showDialog);
        if (props.isConsentRequired && props.implyConsentOnInteraction) {
            document.body.addEventListener('click', handleBodyClick, false);
        }
        return function () {
            emitter.removeListener('openDialog', showDialog);
            document.body.removeEventListener('click', handleBodyClick, false);
        };
    });
    React.useEffect(function () {
        if (isDialogOpen) {
            props.resetPreferences();
        }
    }, [isDialogOpen]);
    var handleCategoryChange = function (category, value) {
        var _a;
        props.setPreferences((_a = {},
            _a[category] = value,
            _a));
    };
    var handleSave = function () {
        toggleDialog(false);
        props.saveConsent(undefined, false);
    };
    var handleCancel = function () {
        // Only show the cancel confirmation if there's unconsented destinations
        if (props.newDestinations.length > 0) {
            toggleCancel(true);
        }
        else {
            toggleDialog(false);
            props.resetPreferences();
        }
    };
    var handleCancelBack = function () {
        toggleCancel(false);
    };
    var handleCancelConfirm = function () {
        toggleCancel(false);
        toggleDialog(false);
        props.resetPreferences();
    };
    return (React.createElement(React.Fragment, null,
        showBanner && props.isConsentRequired && props.newDestinations.length > 0 && (React.createElement(Banner, { innerRef: function (current) { return (banner = { current: current }); }, onClose: onClose, onChangePreferences: function () { return toggleDialog(true); }, content: props.bannerContent, subContent: props.bannerSubContent, actionsBlock: props.bannerActionsBlock, textColor: props.bannerTextColor, backgroundColor: props.bannerBackgroundColor, onAcceptAll: onAcceptAll, onDenyAll: onDenyAll, hideCloseButton: props.bannerHideCloseButton, asModal: props.bannerAsModal })),
        isDialogOpen && (React.createElement(PreferenceDialog, { customCategories: props.customCategories, destinations: props.destinations, preferences: props.preferences, innerRef: function (current) { return (preferenceDialog = { current: current }); }, onCancel: handleCancel, onSave: handleSave, onChange: handleCategoryChange, marketingDestinations: marketingDestinations, advertisingDestinations: advertisingDestinations, functionalDestinations: functionalDestinations, marketingAndAnalytics: props.preferences.marketingAndAnalytics, advertising: props.preferences.advertising, functional: props.preferences.functional, title: props.preferencesDialogTitle, content: props.preferencesDialogContent, preferencesDialogTemplate: props.preferencesDialogTemplate })),
        isCancelling && (React.createElement(CancelDialog, { innerRef: function (current) { return (cancelDialog = { current: current }); }, onBack: handleCancelBack, onConfirm: handleCancelConfirm, title: props.cancelDialogTitle, content: props.cancelDialogContent, preferencesDialogTemplate: props.preferencesDialogTemplate }))));
};
export default Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sWUFBWSxNQUFNLFFBQVEsQ0FBQTtBQUNqQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFBO0FBQzdCLE9BQU8sZ0JBQWdCLE1BQU0scUJBQXFCLENBQUE7QUFDbEQsT0FBTyxZQUFZLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sY0FBYyxDQUFBO0FBVzVFLElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7QUFDbEMsTUFBTSxVQUFVLFVBQVU7SUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBc0NELFNBQVMscUJBQXFCLENBQUMsWUFBMkI7SUFDeEQsSUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxDQUFBO0lBQy9DLElBQU0sdUJBQXVCLEdBQWtCLEVBQUUsQ0FBQTtJQUNqRCxJQUFNLHNCQUFzQixHQUFrQixFQUFFLENBQUE7NEJBRXJDLFdBQVc7UUFDcEIsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxFQUFFO1lBQ2hFLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUMxQzthQUFNLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQTFCLENBQTBCLENBQUMsRUFBRTtZQUN0RSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDekM7YUFB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