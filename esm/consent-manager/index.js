var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { PureComponent } from 'react';
import ConsentManagerBuilder from '../consent-manager-builder';
import Container from './container';
import { ADVERTISING_CATEGORIES, FUNCTIONAL_CATEGORIES } from './categories';
var zeroValuePreferences = {
    marketingAndAnalytics: null,
    advertising: null,
    functional: null
};
var defaultPreferencesDialogTemplate = {
    headings: {
        allowValue: 'Allow',
        categoryValue: 'Category',
        purposeValue: 'Purpose',
        toolsValue: 'Tools'
    },
    checkboxes: {
        noValue: 'No',
        yesValue: 'Yes'
    },
    actionButtons: {
        cancelValue: 'Cancel',
        saveValue: 'Save'
    },
    cancelDialogButtons: {
        cancelValue: 'Yes, Cancel',
        backValue: 'Go Back'
    },
    categories: [
        {
            key: 'functional',
            name: 'Functional',
            description: 'To monitor the performance of our site and to enhance your browsing experience.',
            example: 'For example, these tools enable you to communicate with us via live chat.'
        },
        {
            key: 'marketing',
            name: 'Marketing and Analytics',
            description: 'To understand user behavior in order to provide you with a more relevant browsing experience or personalize the content on our site.',
            example: 'For example, we collect information about which pages you visit to help us present more relevant information.'
        },
        {
            key: 'advertising',
            name: 'Advertising',
            description: 'To personalize and measure the effectiveness of advertising on our site and other websites.',
            example: 'For example, we may serve you a personalized ad based on the pages you visit on our site.'
        },
        {
            key: 'essential',
            name: 'Essential',
            description: 'We use browser cookies that are necessary for the site to work as intended.',
            example: 'For example, we store your website data collection preferences so we can honor them if you return to our site. You can disable these cookies in your browser settings but if you do the site may not work as intended.'
        }
    ]
};
var ConsentManager = /** @class */ (function (_super) {
    __extends(ConsentManager, _super);
    function ConsentManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mergeTemplates = function (newProps, defaultPreferencesDialogTemplate) {
            var headingsMerge = __assign(__assign({}, defaultPreferencesDialogTemplate.headings), newProps.headings);
            var checkboxesMerge = __assign(__assign({}, defaultPreferencesDialogTemplate.checkboxes), newProps.checkboxes);
            var actionButtonsMerge = __assign(__assign({}, defaultPreferencesDialogTemplate.actionButtons), newProps.actionButtons);
            var cancelDialogButtonsMerge = __assign(__assign({}, defaultPreferencesDialogTemplate.cancelDialogButtons), newProps.cancelDialogButtons);
            var categoriesMerge = defaultPreferencesDialogTemplate === null || defaultPreferencesDialogTemplate === void 0 ? void 0 : defaultPreferencesDialogTemplate.categories.map(function (category) {
                var _a;
                return (__assign(__assign({}, category), (_a = newProps === null || newProps === void 0 ? void 0 : newProps.categories) === null || _a === void 0 ? void 0 : _a.find(function (c) { return c.key === category.key; })));
            });
            return {
                headings: headingsMerge,
                checkboxes: checkboxesMerge,
                actionButtons: actionButtonsMerge,
                cancelDialogButtons: cancelDialogButtonsMerge,
                categories: categoriesMerge
            };
        };
        _this.getInitialPreferences = function () {
            var _a = _this.props, initialPreferences = _a.initialPreferences, customCategories = _a.customCategories;
            if (initialPreferences) {
                return initialPreferences;
            }
            if (!customCategories) {
                return zeroValuePreferences;
            }
            var initialCustomPreferences = {};
            Object.keys(customCategories).forEach(function (category) {
                initialCustomPreferences[category] = null;
            });
            return initialCustomPreferences;
        };
        _this.handleMapCustomPreferences = function (destinations, preferences) {
            var customCategories = _this.props.customCategories;
            var destinationPreferences = {};
            var customPreferences = {};
            if (customCategories) {
                for (var _i = 0, _a = Object.keys(customCategories); _i < _a.length; _i++) {
                    var preferenceName = _a[_i];
                    var value = preferences[preferenceName];
                    if (typeof value === 'boolean' || typeof value === 'string') {
                        customPreferences[preferenceName] = value;
                    }
                    else {
                        customPreferences[preferenceName] = true;
                    }
                }
                destinations.forEach(function (destination) {
                    // Mark custom categories
                    Object.entries(customCategories).forEach(function (_a) {
                        var categoryName = _a[0], integrations = _a[1].integrations;
                        var consentAlreadySetToFalse = destinationPreferences[destination.id] === false;
                        var shouldSetConsent = integrations.includes(destination.id);
                        if (shouldSetConsent && !consentAlreadySetToFalse) {
                            destinationPreferences[destination.id] = customPreferences[categoryName];
                        }
                    });
                });
                return { destinationPreferences: destinationPreferences, customPreferences: customPreferences };
            }
            // Default unset preferences to true (for implicit consent)
            for (var _b = 0, _c = Object.keys(preferences); _b < _c.length; _b++) {
                var preferenceName = _c[_b];
                var value = preferences[preferenceName];
                if (typeof value === 'boolean') {
                    customPreferences[preferenceName] = value;
                }
                else {
                    customPreferences[preferenceName] = true;
                }
            }
            var customPrefs = customPreferences;
            var _loop_1 = function (destination) {
                // Mark advertising destinations
                if (ADVERTISING_CATEGORIES.find(function (c) { return c === destination.category; }) &&
                    destinationPreferences[destination.id] !== false) {
                    destinationPreferences[destination.id] = customPrefs.advertising;
                }
                // Mark function destinations
                if (FUNCTIONAL_CATEGORIES.find(function (c) { return c === destination.category; }) &&
                    destinationPreferences[destination.id] !== false) {
                    destinationPreferences[destination.id] = customPrefs.functional;
                }
                // Fallback to marketing
                if (!(destination.id in destinationPreferences)) {
                    destinationPreferences[destination.id] = customPrefs.marketingAndAnalytics;
                }
            };
            for (var _d = 0, destinations_1 = destinations; _d < destinations_1.length; _d++) {
                var destination = destinations_1[_d];
                _loop_1(destination);
            }
            return { destinationPreferences: destinationPreferences, customPreferences: customPreferences };
        };
        return _this;
    }
    ConsentManager.prototype.render = function () {
        var _this = this;
        var _a = this.props, writeKey = _a.writeKey, otherWriteKeys = _a.otherWriteKeys, shouldRequireConsent = _a.shouldRequireConsent, disableSegmentLoad = _a.disableSegmentLoad, implyConsentOnInteraction = _a.implyConsentOnInteraction, cookieDomain = _a.cookieDomain, cookieName = _a.cookieName, cookieExpires = _a.cookieExpires, cookieAttributes = _a.cookieAttributes, bannerContent = _a.bannerContent, bannerActionsBlock = _a.bannerActionsBlock, bannerSubContent = _a.bannerSubContent, bannerTextColor = _a.bannerTextColor, bannerBackgroundColor = _a.bannerBackgroundColor, bannerHideCloseButton = _a.bannerHideCloseButton, bannerAsModal = _a.bannerAsModal, preferencesDialogTitle = _a.preferencesDialogTitle, preferencesDialogContent = _a.preferencesDialogContent, cancelDialogTitle = _a.cancelDialogTitle, cancelDialogContent = _a.cancelDialogContent, customCategories = _a.customCategories, defaultDestinationBehavior = _a.defaultDestinationBehavior, cdnHost = _a.cdnHost, preferencesDialogTemplate = _a.preferencesDialogTemplate, onError = _a.onError;
        return (React.createElement(ConsentManagerBuilder, { onError: onError, writeKey: writeKey, otherWriteKeys: otherWriteKeys, shouldRequireConsent: shouldRequireConsent, disableSegmentLoad: disableSegmentLoad, cookieDomain: cookieDomain, cookieName: cookieName, cookieExpires: cookieExpires, cookieAttributes: cookieAttributes, initialPreferences: this.getInitialPreferences(), mapCustomPreferences: this.handleMapCustomPreferences, customCategories: customCategories, defaultDestinationBehavior: defaultDestinationBehavior, cdnHost: cdnHost }, function (_a) {
            var destinations = _a.destinations, customCategories = _a.customCategories, newDestinations = _a.newDestinations, preferences = _a.preferences, isConsentRequired = _a.isConsentRequired, setPreferences = _a.setPreferences, resetPreferences = _a.resetPreferences, saveConsent = _a.saveConsent, havePreferencesChanged = _a.havePreferencesChanged, workspaceAddedNewDestinations = _a.workspaceAddedNewDestinations;
            return (React.createElement(Container, { customCategories: customCategories, destinations: destinations, newDestinations: newDestinations, preferences: preferences, isConsentRequired: isConsentRequired, setPreferences: setPreferences, resetPreferences: resetPreferences, saveConsent: saveConsent, closeBehavior: _this.props.closeBehavior, implyConsentOnInteraction: implyConsentOnInteraction !== null && implyConsentOnInteraction !== void 0 ? implyConsentOnInteraction : ConsentManager.defaultProps.implyConsentOnInteraction, bannerContent: bannerContent, bannerSubContent: bannerSubContent, bannerActionsBlock: bannerActionsBlock, bannerHideCloseButton: bannerHideCloseButton, bannerTextColor: bannerTextColor || ConsentManager.defaultProps.bannerTextColor, bannerBackgroundColor: bannerBackgroundColor || ConsentManager.defaultProps.bannerBackgroundColor, bannerAsModal: bannerAsModal, preferencesDialogTitle: preferencesDialogTitle, preferencesDialogContent: preferencesDialogContent, cancelDialogTitle: cancelDialogTitle, cancelDialogContent: cancelDialogContent, havePreferencesChanged: havePreferencesChanged, defaultDestinationBehavior: defaultDestinationBehavior, workspaceAddedNewDestinations: workspaceAddedNewDestinations, preferencesDialogTemplate: preferencesDialogTemplate
                    ? _this.mergeTemplates(preferencesDialogTemplate, defaultPreferencesDialogTemplate)
                    : ConsentManager.defaultProps.preferencesDialogTemplate }));
        }));
    };
    ConsentManager.displayName = 'ConsentManager';
    ConsentManager.defaultProps = {
        otherWriteKeys: [],
        shouldRequireConsent: function () { return true; },
        disableSegmentLoad: false,
        implyConsentOnInteraction: false,
        onError: undefined,
        cookieDomain: undefined,
        cookieName: undefined,
        cookieExpires: undefined,
        cookieAttributes: {},
        customCategories: undefined,
        bannerActionsBlock: undefined,
        bannerHideCloseButton: false,
        bannerTextColor: '#fff',
        bannerSubContent: 'You can change your preferences at any time.',
        bannerBackgroundColor: '#1f4160',
        preferencesDialogTitle: 'Website Data Collection Preferences',
        cancelDialogTitle: 'Are you sure you want to cancel?',
        defaultDestinationBehavior: 'disable',
        preferencesDialogTemplate: defaultPreferencesDialogTemplate
    };
    return ConsentManager;
}(PureComponent));
export default ConsentManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQzVDLE9BQU8scUJBQXFCLE1BQU0sNEJBQTRCLENBQUE7QUFDOUQsT0FBTyxTQUFTLE1BQU0sYUFBYSxDQUFBO0FBQ25DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQVE1RSxJQUFNLG9CQUFvQixHQUF3QjtJQUNoRCxxQkFBcUIsRUFBRSxJQUFJO0lBQzNCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLFVBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQUE7QUFFRCxJQUFNLGdDQUFnQyxHQUE2QjtJQUNqRSxRQUFRLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixhQUFhLEVBQUUsVUFBVTtRQUN6QixZQUFZLEVBQUUsU0FBUztRQUN2QixVQUFVLEVBQUUsT0FBTztLQUNwQjtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxhQUFhLEVBQUU7UUFDYixXQUFXLEVBQUUsUUFBUTtRQUNyQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNELG1CQUFtQixFQUFFO1FBQ25CLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFNBQVMsRUFBRSxTQUFTO0tBQ3JCO0lBQ0QsVUFBVSxFQUFFO1FBQ1Y7WUFDRSxHQUFHLEVBQUUsWUFBWTtZQUNqQixJQUFJLEVBQUUsWUFBWTtZQUNsQixXQUFXLEVBQ1QsaUZBQWlGO1lBQ25GLE9BQU8sRUFBRSwyRUFBMkU7U0FDckY7UUFDRDtZQUNFLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLElBQUksRUFBRSx5QkFBeUI7WUFDL0Is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