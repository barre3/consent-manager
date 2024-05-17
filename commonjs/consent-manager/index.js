"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var consent_manager_builder_1 = __importDefault(require("../consent-manager-builder"));
var container_1 = __importDefault(require("./container"));
var categories_1 = require("./categories");
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
                if (categories_1.ADVERTISING_CATEGORIES.find(function (c) { return c === destination.category; }) &&
                    destinationPreferences[destination.id] !== false) {
                    destinationPreferences[destination.id] = customPrefs.advertising;
                }
                // Mark function destinations
                if (categories_1.FUNCTIONAL_CATEGORIES.find(function (c) { return c === destination.category; }) &&
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
        return (react_1.default.createElement(consent_manager_builder_1.default, { onError: onError, writeKey: writeKey, otherWriteKeys: otherWriteKeys, shouldRequireConsent: shouldRequireConsent, disableSegmentLoad: disableSegmentLoad, cookieDomain: cookieDomain, cookieName: cookieName, cookieExpires: cookieExpires, cookieAttributes: cookieAttributes, initialPreferences: this.getInitialPreferences(), mapCustomPreferences: this.handleMapCustomPreferences, customCategories: customCategories, defaultDestinationBehavior: defaultDestinationBehavior, cdnHost: cdnHost }, function (_a) {
            var destinations = _a.destinations, customCategories = _a.customCategories, newDestinations = _a.newDestinations, preferences = _a.preferences, isConsentRequired = _a.isConsentRequired, setPreferences = _a.setPreferences, resetPreferences = _a.resetPreferences, saveConsent = _a.saveConsent, havePreferencesChanged = _a.havePreferencesChanged, workspaceAddedNewDestinations = _a.workspaceAddedNewDestinations;
            return (react_1.default.createElement(container_1.default, { customCategories: customCategories, destinations: destinations, newDestinations: newDestinations, preferences: preferences, isConsentRequired: isConsentRequired, setPreferences: setPreferences, resetPreferences: resetPreferences, saveConsent: saveConsent, closeBehavior: _this.props.closeBehavior, implyConsentOnInteraction: implyConsentOnInteraction !== null && implyConsentOnInteraction !== void 0 ? implyConsentOnInteraction : ConsentManager.defaultProps.implyConsentOnInteraction, bannerContent: bannerContent, bannerSubContent: bannerSubContent, bannerActionsBlock: bannerActionsBlock, bannerHideCloseButton: bannerHideCloseButton, bannerTextColor: bannerTextColor || ConsentManager.defaultProps.bannerTextColor, bannerBackgroundColor: bannerBackgroundColor || ConsentManager.defaultProps.bannerBackgroundColor, bannerAsModal: bannerAsModal, preferencesDialogTitle: preferencesDialogTitle, preferencesDialogContent: preferencesDialogContent, cancelDialogTitle: cancelDialogTitle, cancelDialogContent: cancelDialogContent, havePreferencesChanged: havePreferencesChanged, defaultDestinationBehavior: defaultDestinationBehavior, workspaceAddedNewDestinations: workspaceAddedNewDestinations, preferencesDialogTemplate: preferencesDialogTemplate
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
}(react_1.PureComponent));
exports.default = ConsentManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsdUZBQThEO0FBQzlELDBEQUFtQztBQUNuQywyQ0FBNEU7QUFRNUUsSUFBTSxvQkFBb0IsR0FBd0I7SUFDaEQscUJBQXFCLEVBQUUsSUFBSTtJQUMzQixXQUFXLEVBQUUsSUFBSTtJQUNqQixVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUFBO0FBRUQsSUFBTSxnQ0FBZ0MsR0FBNkI7SUFDakUsUUFBUSxFQUFFO1FBQ1IsVUFBVSxFQUFFLE9BQU87UUFDbkIsYUFBYSxFQUFFLFVBQVU7UUFDekIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLE9BQU87S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsV0FBVyxFQUFFLFFBQVE7UUFDckIsU0FBUyxFQUFFLE1BQU07S0FDbEI7SUFDRCxtQkFBbUIsRUFBRTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsU0FBUztLQUNyQjtJQUNELFVBQVUsRUFBRTtRQUNWO1lBQ0UsR0FBRyxFQUFFLFlBQVk7WUFDakIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsV0FBVyxFQUNULGlGQUFpRjtZQUNuRixPQUFPLEVBQUUsMkVBQTJFO1NBQ3JGO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsV0FBVztZQUNoQixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLFdBQVcsRUFDVCxzSUFBc0k7WUFDeEksT0FBTyxFQUNMLCtHQUErRztTQUNsSDtRQUNEO1lBQ0UsR0FBRyxFQUFFLGFBQWE7WUFDbEIsSUFBSSxFQUFFLGFBQWE7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