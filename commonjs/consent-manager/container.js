"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openDialog = void 0;
var events_1 = __importDefault(require("events"));
var react_1 = __importDefault(require("react"));
var banner_1 = __importDefault(require("./banner"));
var preference_dialog_1 = __importDefault(require("./preference-dialog"));
var cancel_dialog_1 = __importDefault(require("./cancel-dialog"));
var categories_1 = require("./categories");
var emitter = new events_1.default();
function openDialog() {
    emitter.emit('openDialog');
}
exports.openDialog = openDialog;
function normalizeDestinations(destinations) {
    var marketingDestinations = [];
    var advertisingDestinations = [];
    var functionalDestinations = [];
    var _loop_1 = function (destination) {
        if (categories_1.ADVERTISING_CATEGORIES.find(function (c) { return c === destination.category; })) {
            advertisingDestinations.push(destination);
        }
        else if (categories_1.FUNCTIONAL_CATEGORIES.find(function (c) { return c === destination.category; })) {
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
    var _a = react_1.default.useState(false || (props.workspaceAddedNewDestinations && props.defaultDestinationBehavior === 'ask')), isDialogOpen = _a[0], toggleDialog = _a[1];
    var _b = react_1.default.useState(true), showBanner = _b[0], toggleBanner = _b[1];
    var _c = react_1.default.useState(false), isCancelling = _c[0], toggleCancel = _c[1];
    var banner = react_1.default.useRef(null);
    var preferenceDialog = react_1.default.useRef(null);
    var cancelDialog = react_1.default.useRef(null);
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
    react_1.default.useEffect(function () {
        emitter.on('openDialog', showDialog);
        if (props.isConsentRequired && props.implyConsentOnInteraction) {
            document.body.addEventListener('click', handleBodyClick, false);
        }
        return function () {
            emitter.removeListener('openDialog', showDialog);
            document.body.removeEventListener('click', handleBodyClick, false);
        };
    });
    react_1.default.useEffect(function () {
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        showBanner && props.isConsentRequired && props.newDestinations.length > 0 && (react_1.default.createElement(banner_1.default, { innerRef: function (current) { return (banner = { current: current }); }, onClose: onClose, onChangePreferences: function () { return toggleDialog(true); }, content: props.bannerContent, subContent: props.bannerSubContent, actionsBlock: props.bannerActionsBlock, textColor: props.bannerTextColor, backgroundColor: props.bannerBackgroundColor, onAcceptAll: onAcceptAll, onDenyAll: onDenyAll, hideCloseButton: props.bannerHideCloseButton, asModal: props.bannerAsModal })),
        isDialogOpen && (react_1.default.createElement(preference_dialog_1.default, { customCategories: props.customCategories, destinations: props.destinations, preferences: props.preferences, innerRef: function (current) { return (preferenceDialog = { current: current }); }, onCancel: handleCancel, onSave: handleSave, onChange: handleCategoryChange, marketingDestinations: marketingDestinations, advertisingDestinations: advertisingDestinations, functionalDestinations: functionalDestinations, marketingAndAnalytics: props.preferences.marketingAndAnalytics, advertising: props.preferences.advertising, functional: props.preferences.functional, title: props.preferencesDialogTitle, content: props.preferencesDialogContent, preferencesDialogTemplate: props.preferencesDialogTemplate })),
        isCancelling && (react_1.default.createElement(cancel_dialog_1.default, { innerRef: function (current) { return (cancelDialog = { current: current }); }, onBack: handleCancelBack, onConfirm: handleCancelConfirm, title: props.cancelDialogTitle, content: props.cancelDialogContent, preferencesDialogTemplate: props.preferencesDialogTemplate }))));
};
exports.default = Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUFpQztBQUNqQyxnREFBeUI7QUFDekIsb0RBQTZCO0FBQzdCLDBFQUFrRDtBQUNsRCxrRUFBMEM7QUFDMUMsMkNBQTRFO0FBVzVFLElBQU0sT0FBTyxHQUFHLElBQUksZ0JBQVksRUFBRSxDQUFBO0FBQ2xDLFNBQWdCLFVBQVU7SUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBRkQsZ0NBRUM7QUFzQ0QsU0FBUyxxQkFBcUIsQ0FBQyxZQUEyQjtJQUN4RCxJQUFNLHFCQUFxQixHQUFrQixFQUFFLENBQUE7SUFDL0MsSUFBTSx1QkFBdUIsR0FBa0IsRUFBRSxDQUFBO0lBQ2pELElBQU0sc0JBQXNCLEdBQWtCLEVBQUUsQ0FBQTs0QkFFckMsV0FBVztRQUNwQixJQUFJLG1DQUFzQixDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUExQixDQUEwQixDQUFDLEVBQUU7WUFDaEUsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQzFDO2FBQU0sSUFBSSxrQ0FBcUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxFQUFFO1lBQ3RFLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUN6QzthQUFNO1lBQ0wsd0JBQXdCO1lBQ3hCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUN4Qzs7SUFSSCxLQUEwQixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVk7UUFBakMsSUFBTSxX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