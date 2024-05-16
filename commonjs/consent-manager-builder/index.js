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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var preferences_1 = require("./preferences");
var fetch_destinations_1 = __importDefault(require("./fetch-destinations"));
var analytics_1 = __importDefault(require("./analytics"));
function getNewDestinations(destinations, preferences) {
    var newDestinations = [];
    // If there are no preferences then all destinations are new
    if (!preferences) {
        return destinations;
    }
    for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
        var destination = destinations_1[_i];
        if (preferences[destination.id] === undefined) {
            newDestinations.push(destination);
        }
    }
    return newDestinations;
}
var DEFAULT_CATEGORIES = {
    functional: false,
    marketingAndAnalytics: false,
    advertising: false,
    essential: false
};
var ConsentManagerBuilder = /** @class */ (function (_super) {
    __extends(ConsentManagerBuilder, _super);
    function ConsentManagerBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isLoading: true,
            destinations: [],
            newDestinations: [],
            preferences: {},
            destinationPreferences: {},
            isConsentRequired: true,
            havePreferencesChanged: false,
            workspaceAddedNewDestinations: false,
            useDefaultCategories: false
        };
        _this.initialise = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, writeKey, _b, otherWriteKeys, _c, shouldRequireConsent, initialPreferences, mapCustomPreferences, defaultDestinationBehavior, cookieName, _d, cdnHost, _e, shouldReload, _f, devMode, _g, useDefaultCategories, _h, destinationPreferences, customPreferences, _j, isConsentRequired, destinations, newDestinations, workspaceAddedNewDestinations, preferences, initialPrefencesHaveValue, emptyCustomPreferecences, mapped;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _a = this.props, writeKey = _a.writeKey, _b = _a.otherWriteKeys, otherWriteKeys = _b === void 0 ? ConsentManagerBuilder.defaultProps.otherWriteKeys : _b, _c = _a.shouldRequireConsent, shouldRequireConsent = _c === void 0 ? ConsentManagerBuilder.defaultProps.shouldRequireConsent : _c, initialPreferences = _a.initialPreferences, mapCustomPreferences = _a.mapCustomPreferences, defaultDestinationBehavior = _a.defaultDestinationBehavior, cookieName = _a.cookieName, _d = _a.cdnHost, cdnHost = _d === void 0 ? ConsentManagerBuilder.defaultProps.cdnHost : _d, _e = _a.shouldReload, shouldReload = _e === void 0 ? ConsentManagerBuilder.defaultProps.shouldReload : _e, _f = _a.devMode, devMode = _f === void 0 ? ConsentManagerBuilder.defaultProps.devMode : _f, _g = _a.useDefaultCategories, useDefaultCategories = _g === void 0 ? ConsentManagerBuilder.defaultProps.useDefaultCategories : _g;
                        _h = (0, preferences_1.loadPreferences)(cookieName), destinationPreferences = _h.destinationPreferences, customPreferences = _h.customPreferences;
                        return [4 /*yield*/, Promise.all([
                                shouldRequireConsent(),
                                (0, fetch_destinations_1.default)(cdnHost, __spreadArray([writeKey], otherWriteKeys, true))
                            ])];
                    case 1:
                        _j = _k.sent(), isConsentRequired = _j[0], destinations = _j[1];
                        newDestinations = getNewDestinations(destinations, destinationPreferences || {});
                        workspaceAddedNewDestinations = destinationPreferences &&
                            Object.keys(destinationPreferences).length > 0 &&
                            newDestinations.length > 0;
                        initialPrefencesHaveValue = Object.values(initialPreferences || {}).some(function (v) { return v === true || v === false || v === 'N/A'; });
                        emptyCustomPreferecences = Object.values(customPreferences || {}).every(function (v) { return v === null || v === undefined || v === 'N/A'; });
                        if (mapCustomPreferences) {
                            preferences = useDefaultCategories
                                ? DEFAULT_CATEGORIES
                                : customPreferences || initialPreferences || {};
                            if ((initialPrefencesHaveValue && emptyCustomPreferecences) ||
                                (defaultDestinationBehavior === 'imply' && workspaceAddedNewDestinations)) {
                                mapped = mapCustomPreferences(destinations, preferences);
                                destinationPreferences = mapped.destinationPreferences;
                                customPreferences = mapped.customPreferences;
                                preferences = customPreferences;
                            }
                        }
                        else {
                            preferences = useDefaultCategories
                                ? DEFAULT_CATEGORIES
                                : destinationPreferences || initialPreferences;
                        }
                        (0, analytics_1.default)({
                            writeKey: writeKey,
                            destinations: destinations,
                            destinationPreferences: destinationPreferences,
                            isConsentRequired: isConsentRequired,
                            shouldReload: shouldReload,
                            devMode: devMode,
                            defaultDestinationBehavior: defaultDestinationBehavior,
                            categoryPreferences: preferences
                        });
                        this.setState({
                            isLoading: false,
                            destinations: destinations,
                            newDestinations: newDestinations,
                            preferences: preferences,
                            isConsentRequired: isConsentRequired,
                            destinationPreferences: destinationPreferences,
                            workspaceAddedNewDestinations: Boolean(workspaceAddedNewDestinations)
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleSetPreferences = function (newPreferences) {
            _this.setState(function (prevState) {
                var destinations = prevState.destinations, existingPreferences = prevState.preferences;
                var preferences = _this.mergePreferences({
                    destinations: destinations,
                    newPreferences: newPreferences,
                    existingPreferences: existingPreferences
                });
                return __assign(__assign({}, prevState), { preferences: preferences, havePreferencesChanged: true });
            });
        };
        _this.handleResetPreferences = function () {
            var _a = _this.props, initialPreferences = _a.initialPreferences, mapCustomPreferences = _a.mapCustomPreferences, cookieName = _a.cookieName;
            var _b = (0, preferences_1.loadPreferences)(cookieName), destinationPreferences = _b.destinationPreferences, customPreferences = _b.customPreferences;
            var preferences;
            if (mapCustomPreferences) {
                preferences = customPreferences || initialPreferences;
            }
            else {
                preferences = destinationPreferences || initialPreferences;
            }
            _this.setState({ preferences: preferences });
        };
        _this.handleSaveConsent = function (newPreferences, shouldReload, devMode) {
            var _a = _this.props, writeKey = _a.writeKey, cookieDomain = _a.cookieDomain, cookieName = _a.cookieName, cookieExpires = _a.cookieExpires, cookieAttributes = _a.cookieAttributes, mapCustomPreferences = _a.mapCustomPreferences, defaultDestinationBehavior = _a.defaultDestinationBehavior;
            _this.setState(function (prevState) {
                var destinations = prevState.destinations, existingPreferences = prevState.preferences, isConsentRequired = prevState.isConsentRequired;
                var preferences = _this.mergePreferences({
                    destinations: destinations,
                    newPreferences: newPreferences,
                    existingPreferences: existingPreferences
                });
                var destinationPreferences;
                var customPreferences;
                if (mapCustomPreferences) {
                    var custom = mapCustomPreferences(destinations, preferences);
                    destinationPreferences = custom.destinationPreferences;
                    customPreferences = custom.customPreferences;
                    if (customPreferences) {
                        // Allow the customPreferences to be updated from mapCustomPreferences
                        preferences = customPreferences;
                    }
                    else {
                        // Make returning the customPreferences from mapCustomPreferences optional
                        customPreferences = preferences;
                    }
                }
                else {
                    destinationPreferences = preferences;
                }
                var newDestinations = getNewDestinations(destinations, destinationPreferences);
                if (prevState.havePreferencesChanged ||
                    newDestinations.length > 0 ||
                    typeof newPreferences === 'boolean') {
                    shouldReload = true;
                }
                (0, preferences_1.savePreferences)({
                    destinationPreferences: destinationPreferences,
                    customPreferences: customPreferences,
                    cookieDomain: cookieDomain,
                    cookieName: cookieName,
                    cookieExpires: cookieExpires,
                    cookieAttributes: cookieAttributes
                });
                (0, analytics_1.default)({
                    writeKey: writeKey,
                    destinations: destinations,
                    destinationPreferences: destinationPreferences,
                    isConsentRequired: isConsentRequired,
                    shouldReload: shouldReload,
                    devMode: devMode,
                    defaultDestinationBehavior: defaultDestinationBehavior,
                    categoryPreferences: customPreferences
                });
                return __assign(__assign({}, prevState), { destinationPreferences: destinationPreferences, preferences: preferences, newDestinations: newDestinations });
            });
        };
        _this.mergePreferences = function (args) {
            var destinations = args.destinations, existingPreferences = args.existingPreferences, newPreferences = args.newPreferences;
            var preferences;
            if (typeof newPreferences === 'boolean') {
                var destinationPreferences = {};
                for (var _i = 0, destinations_2 = destinations; _i < destinations_2.length; _i++) {
                    var destination = destinations_2[_i];
                    destinationPreferences[destination.id] = newPreferences;
                }
                preferences = destinationPreferences;
            }
            else if (newPreferences) {
                preferences = __assign(__assign({}, existingPreferences), newPreferences);
            }
            else {
                preferences = existingPreferences;
            }
            return preferences;
        };
        return _this;
    }
    ConsentManagerBuilder.prototype.render = function () {
        var _a = this.props, children = _a.children, customCategories = _a.customCategories;
        var _b = this.state, isLoading = _b.isLoading, destinations = _b.destinations, preferences = _b.preferences, newDestinations = _b.newDestinations, isConsentRequired = _b.isConsentRequired, havePreferencesChanged = _b.havePreferencesChanged, workspaceAddedNewDestinations = _b.workspaceAddedNewDestinations, destinationPreferences = _b.destinationPreferences;
        if (isLoading) {
            return null;
        }
        return children({
            destinations: destinations,
            customCategories: customCategories,
            newDestinations: newDestinations,
            preferences: preferences,
            isConsentRequired: isConsentRequired,
            havePreferencesChanged: havePreferencesChanged,
            workspaceAddedNewDestinations: workspaceAddedNewDestinations,
            destinationPreferences: destinationPreferences,
            setPreferences: this.handleSetPreferences,
            resetPreferences: this.handleResetPreferences,
            saveConsent: this.handleSaveConsent
        });
    };
    ConsentManagerBuilder.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var onError, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onError = this.props.onError;
                        if (!(onError && typeof onError === 'function')) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.initialise()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        return [4 /*yield*/, onError(e_1)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.initialise()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ConsentManagerBuilder.displayName = 'ConsentManagerBuilder';
    ConsentManagerBuilder.defaultProps = {
        otherWriteKeys: [],
        onError: undefined,
        shouldRequireConsent: function () { return true; },
        initialPreferences: {},
        cdnHost: 'cdn.segment.com',
        shouldReload: true,
        devMode: false,
        useDefaultCategories: false
    };
    return ConsentManagerBuilder;
}(react_1.Component));
exports.default = ConsentManagerBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyLWJ1aWxkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBaUM7QUFDakMsNkNBQWdFO0FBQ2hFLDRFQUFvRDtBQUNwRCwwREFBb0Q7QUFTcEQsU0FBUyxrQkFBa0IsQ0FBQyxZQUEyQixFQUFFLFdBQWdDO0lBQ3ZGLElBQU0sZUFBZSxHQUFrQixFQUFFLENBQUE7SUFFekMsNERBQTREO0lBQzVELElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDaEIsT0FBTyxZQUFZLENBQUE7S0FDcEI7SUFFRCxLQUEwQixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtRQUFuQyxJQUFNLFdBQVcscUJBQUE7UUFDcEIsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUM3QyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ2xDO0tBQ0Y7SUFFRCxPQUFPLGVBQWUsQ0FBQTtBQUN4QixDQUFDO0FBOEdELElBQU0sa0JBQWtCLEdBQUc7SUFDekIsVUFBVSxFQUFFLEtBQUs7SUFDakIscUJBQXFCLEVBQUUsS0FBSztJQUM1QixXQUFXLEVBQUUsS0FBSztJQUNsQixTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFBO0FBRUQ7SUFBbUQseUNBQXVCO0lBQTFFO1FBQUEscUVBc1JDO1FBeFFDLFdBQUssR0FBRztZQUNOLFNBQVMsRUFBRSxJQUFJO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZUFBZSxFQUFFLEVBQUU7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixzQkFBc0IsRUFBRSxFQUFFO1lBQzFCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsc0JBQXNCLEVBQUUsS0FBSztZQUM3Qiw2QkFBNkIsRUFBRSxLQUFLO1lBQ3BDLG9CQUFvQixFQUFFLEtBQUs7U0FDNUIsQ0FBQTtRQThDRCxnQkFBVSxHQUFHOzs7Ozt3QkFDTCxLQVlGLElBQUksQ0FBQyxLQUFLLEVBWFosUUFBUSxjQUFBLEVBQ1Isc0JBQWtFLEVBQWxFLGNBQWMsbUJBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLGNBQWMsS0FBQSxFQUNsRSw0QkFBOEUsRUFBOUUsb0JBQW9CLG1CQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxvQkFBb0IsS0FBQSxFQUM5RSxrQkFBa0Isd0JBQUEsRUFDbEIsb0JBQW9CLDBCQUFBLEVBQ3BCLDBCQUEwQixnQ0FBQSxFQUMxQixVQUFVLGdCQUFBLEVBQ1YsZUFBb0QsRUFBcEQsT0FBTyxtQkFBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFBLEVBQ3BELG9CQUE4RCxFQUE5RCxZQUFZLG1CQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUEsRUFDOUQsZUFBb0QsRUFBcEQsT0FBTyxtQkFBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFBLEVBQ3BELDRCQUE4RSxFQUE5RSxvQkFBb0IsbUJBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLG9CQUFvQixLQUFBLENBQ2xFO3dCQUdWLEtBQWdELElBQUEsNkJBQWUsRUFBQyxVQUFVLENBQUMsRUFBekUsc0JBQXNCLDRCQUFBLEVBQUUsaUJBQWlCLHVCQUFBLENBQWdDO3dCQUNyQyxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dDQUMxRCxvQkFBb0IsRUFBRTtnQ0FDdEIsSUFBQSw0QkFBaUIsRUFBQyxPQUFPLGlCQUFHLFFBQVEsR0FBSyxjQUFjLFFBQUU7NkJBQzFELENBQUMsRUFBQTs7d0JBSEksS0FBb0MsU0FHeEMsRUFISyxpQkFBaUIsUUFBQSxFQUFFLFlBQVksUUFBQTt3QkFJaEMsZUFBZSxHQUFHLGtCQUFrQixDQUFDLFlBQVksRUFBRSxzQkFBc0IsSUFBSSxFQUFFLENBQUMsQ0FBQTt3QkFDaEYsNkJBQTZCLEdBQ2pDLHNCQUFzQjs0QkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUM5QyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTt3QkFHdEIseUJBQXlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQXhDLENBQXdDLENBQzlDLENBQUE7d0JBQ0ssd0JBQXdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQzNFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQTVDLENBQTRDLENBQ2xELENBQUE7d0JBRUQsSUFBSSxvQkFBb0IsRUFBRTs0QkFDeEIsV0FBVyxHQUFHLG9CQUFvQjtnQ0FDaEMsQ0FBQyxDQUFDLGtCQUFrQjtnQ0FDcEIsQ0FBQyxDQUFDLGlCQUFpQixJQUFJLGtCQUFrQixJQUFJLEVBQUUsQ0FBQTs0QkFDakQsSUFDRSxDQUFDLHlCQUF5QixJQUFJLHdCQUF3QixDQUFDO2dDQUN2RCxDQUFDLDBCQUEwQixLQUFLLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxFQUN6RTtnQ0FDTSxNQUFNLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFBO2dDQUM5RCxzQkFBc0IsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUE7Z0NBQ3RELGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQTtnQ0FDNUMsV0FBVyxHQUFHLGlCQUFpQixDQUFBOzZCQUNoQzt5QkFDRjs2QkFBTTs0QkFDTCxXQUFXLEdBQUcsb0JBQW9CO2dDQUNoQyxDQUFDLENBQUMsa0JBQWtCO2dDQUNwQixDQUFDLENBQUMsc0JBQXNCLElBQUksa0JBQWtCLENBQUE7eUJBQ2pEO3dCQUVELElBQUEsbUJBQTBCLEVBQUM7NEJBQ3pCLFFBQVEsVUFBQTs0QkFDUixZQUFZLGNBQUE7NEJBQ1osc0JBQXNCLHdCQUFBOzRCQUN0QixpQkFBaUIsbUJBQUE7NEJBQ2pCLFlBQVksY0FBQTs0QkFDWixPQUFPLFNBQUE7NEJBQ1AsMEJBQTBCLDRCQUFBOzRCQUMxQixtQkFBbUIsRUFBRSxXQUFXO3lCQUNqQyxDQUFDLENBQUE7d0JBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDWixTQUFTLEVBQUUsS0FBSzs0QkFDaEIsWUFBWSxjQUFBOzRCQUNaLGVBQWUsaUJBQUE7NEJBQ2YsV0FBVyxhQUFBOzRCQUNYLGlCQUFpQixtQkFBQTs0QkFDakIsc0JBQXNCLHdCQUFBOzRCQUN0Qiw2QkFBNkIsRUFBRSxPQUFPLENBQUMsNkJBQTZCLENBQUM7eUJBQ3RFLENBQUMsQ0FBQTs7OzthQUNILENBQUE7UUFFRCwwQkFBb0IsR0FBRyxVQUFDLGNBQW1DO1lBQ3pELEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBQSxTQUFTO2dCQUNiLElBQUEsWUFBWSxHQUF1QyxTQUFTLGFBQWhELEVBQWUsbUJBQW1CLEdBQUssU0FBUyxZQUFkLENBQWM7Z0JBQ3BFLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDeEMsWUFBWSxjQUFBO29CQUNaLGNBQWMsZ0JBQUE7b0JBQ2QsbUJBQW1CLHFCQUFBO2lCQUNwQixDQUFDLENBQUE7Z0JBQ0YsNkJBQVksU0FBUyxLQUFFLFdBQVcsYUFBQSxFQUFFLHNCQUFzQixFQUFFLElBQUksSUFBRTtZQUNwRSxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQTtRQUVELDRCQUFzQixHQUFHO1lBQ2pCLElBQUEsS0FBMkQsS0FBSSxDQUFDLEtBQUssRUFBbkUsa0JBQWtCLHdCQUFBLEVBQUUsb0JBQW9CLDBCQUFBLEVBQUUsVUFBVSxnQkFBZSxDQUFBO1lBQ3JFLElBQUEsS0FBZ0QsSUFBQSw2QkFBZSxFQUFDLFVBQVUsQ0FBQyxFQUF6RSxzQkFBc0IsNEJBQUEsRUFBRSxpQkFBaUIsdUJBQWdDLENBQUE7WUFFakYsSUFBSSxXQUE0QyxDQUFBO1lBQ2hELElBQUksb0JBQW9CLEVBQUU7Z0JBQ3hCLFdBQVcsR0FBRyxpQkFBaUIsSUFBSSxrQkFBa0IsQ0FBQTthQUN0RDtpQkFBTTtnQkFDTCxXQUFXLEdBQUcsc0JBQXNCLElBQUksa0JBQWtCLENBQUE7YUFDM0Q7WUFFRCxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQTtRQUVELHVCQUFpQixHQUFHLFVBQ2xCLGNBQStDLEVBQy9DLFlBQXFCLEVBQ3JCLE9BQWlCO1lBRVgsSUFBQSxLQVFGLEtBQUksQ0FBQyxLQUFLLEVBUFosUUFBUSxjQUFBLEVBQ1IsWUFBWSxrQkFBQSxFQUNaLFVBQVUsZ0JBQUEsRUFDVixhQUFhLG1CQUFBLEVBQ2IsZ0JBQWdCLHNCQUFBLEVBQ2hCLG9CQUFvQiwwQkFBQSxFQUNwQiwwQkFBMEIsZ0NBQ2QsQ0FBQTtZQUVkLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBQSxTQUFTO2dCQUNiLElBQUEsWUFBWSxHQUEwRCxTQUFTLGFBQW5FLEVBQWUsbUJBQW1CLEdBQXdCLFNBQVMsWUFBakMsRUFBRSxpQkFBaUIsR0FBSyxTQUFTLGtCQUFkLENBQWM7Z0JBRXZGLElBQUksV0FBVyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDdEMsWUFBWSxjQUFBO29CQUNaLGNBQWMsZ0JBQUE7b0JBQ2QsbUJBQW1CLHFCQUFBO2lCQUNwQixDQUFDLENBQUE7Z0JBRUYsSUFBSSxzQkFBMkMsQ0FBQTtnQkFDL0MsSUFBSSxpQkFBa0QsQ0FBQTtnQkFFdEQsSUFBSSxvQkFBb0IsRUFBRTtvQkFDeEIsSUFBTSxNQUFNLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFBO29CQUM5RCxzQkFBc0IsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUE7b0JBQ3RELGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQTtvQkFFNUMsSUFBSSxpQkFBaUIsRUFBRTt3QkFDckIsc0VBQXNFO3dCQUN0RSxXQUFXLEdBQUcsaUJBQWlCLENBQUE7cUJBQ2hDO3lCQUFNO3dCQUNMLDBFQUEwRTt3QkFDMUUsaUJBQWlCLEdBQUcsV0FBVyxDQUFBO3FCQUNoQztpQkFDRjtxQkFBTTtvQkFDTCxzQkFBc0IsR0FBRyxXQUFXLENBQUE7aUJBQ3JDO2dCQUVELElBQU0sZUFBZSxHQUFHLGtCQUFrQixDQUFDLFlBQVksRUFBRSxzQkFBc0IsQ0FBQyxDQUFBO2dCQUVoRixJQUNFLFNBQVMsQ0FBQyxzQkFBc0I7b0JBQ2hDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDMUIsT0FBTyxjQUFjLEtBQUssU0FBUyxFQUNuQztvQkFDQSxZQUFZLEdBQUcsSUFBSSxDQUFBO2lCQUNwQjtnQkFDRCxJQUFBLDZCQUFlLEVBQUM7b0JBQ2Qsc0JBQXNCLHdCQUFBO29CQUN0QixpQkFBaUIsbUJBQUE7b0JBQ2pCLFlBQVksY0FBQTtvQkFDWixVQUFVLFlBQUE7b0JBQ1YsYUFBYSxlQUFBO29CQUNiLGdCQUFnQixrQkFBQTtpQkFDakIsQ0FBQyxDQUFBO2dCQUNGLElBQUEsbUJBQTBCLEVBQUM7b0JBQ3pCLFFBQVEsVUFBQTtvQkFDUixZQUFZLGNBQUE7b0JBQ1osc0JBQXNCLHdCQUFBO29CQUN0QixpQkFBaUIsbUJBQUE7b0JBQ2pCLFlBQVksY0FBQTtvQkFDWixPQUFPLFNBQUE7b0JBQ1AsMEJBQTBCLDRCQUFBO29CQUMxQixtQkFBbUIsRUFBRSxpQkFBaUI7aUJBQ3ZDLENBQUMsQ0FBQTtnQkFFRiw2QkFDSyxTQUFTLEtBQ1osc0JBQXNCLHdCQUFBLEVBQ3RCLFdBQVcsYUFBQSxFQUNYLGVBQWUsaUJBQUEsSUFDaEI7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQTtRQUVELHNCQUFnQixHQUFHLFVBQUMsSUFJbkI7WUFDUyxJQUFBLFlBQVksR0FBMEMsSUFBSSxhQUE5QyxFQUFFLG1CQUFtQixHQUFxQixJQUFJLG9CQUF6QixFQUFFLGNBQWMsR0FBSyxJQUFJLGVBQVQsQ0FBUztZQUVsRSxJQUFJLFdBQWdDLENBQUE7WUFFcEMsSUFBSSxPQUFPLGNBQWMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLElBQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFBO2dCQUNqQyxLQUEwQixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtvQkFBbkMsSUFBTSxXQUFXLHFCQUFBO29CQUNwQixzQkFBc0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFBO2lCQUN4RDtnQkFDRCxXQUFXLEdBQUcsc0JBQXNCLENBQUE7YUFDckM7aUJBQU0sSUFBSSxjQUFjLEVBQUU7Z0JBQ3pCLFdBQVcseUJBQ04sbUJBQW1CLEdBQ25CLGNBQWMsQ0FDbEIsQ0FBQTthQUNGO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxtQkFBb0IsQ0FBQTthQUNuQztZQUVELE9BQU8sV0FBVyxDQUFBO1FBQ3BCLENBQUMsQ0FBQTs7SUFDSCxDQUFDO0lBNVBDLHNDQUFNLEdBQU47UUFDUSxJQUFBLEtBQWlDLElBQUksQ0FBQyxLQUFLLEVBQXpDLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBZSxDQUFBO1FBQzNDLElBQUEsS0FTRixJQUFJLENBQUMsS0FBSyxFQVJaLFNBQVMsZUFBQSxFQUNULFlBQVksa0JBQUEsRUFDWixXQUFXLGlCQUFBLEVBQ1gsZUFBZSxxQkFBQSxFQUNmLGlCQUFpQix1QkFBQSxFQUNqQixzQkFBc0IsNEJBQUEsRUFDdEIsNkJBQTZCLG1DQUFBLEVBQzdCLHNCQUFzQiw0QkFDVixDQUFBO1FBQ2QsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQTtTQUNaO1FBRUQsT0FBTyxRQUFRLENBQUM7WUFDZCxZQUFZLGNBQUE7WUFDWixnQkFBZ0Isa0JBQUE7WUFDaEIsZUFBZSxpQkFBQTtZQUNmLFdBQVcsYUFBQTtZQUNYLGlCQUFpQixtQkFBQTtZQUNqQixzQkFBc0Isd0JBQUE7WUFDdEIsNkJBQTZCLCtCQUFBO1lBQzdCLHNCQUFzQix3QkFBQTtZQUN0QixjQUFjLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtZQUN6QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCO1lBQzdDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQ3BDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFSyxpREFBaUIsR0FBdkI7Ozs7Ozt3QkFDVSxPQUFPLEdBQUssSUFBSSxDQUFDLEtBQUssUUFBZixDQUFlOzZCQUMxQixDQUFBLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLENBQUEsRUFBeEMsd0JBQXdDOzs7O3dCQUV4QyxxQkFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUF2QixTQUF1QixDQUFBOzs7O3dCQUV2QixxQkFBTSxPQUFPLENBQUMsR0FBQyxDQUFDLEVBQUE7O3dCQUFoQixTQUFnQixDQUFBOzs7NEJBR2xCLHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUE7Ozs7OztLQUUxQjtJQW5FTSxpQ0FBVyxHQUFHLHVCQUF1QixDQUFBO0lBRXJDLGtDQUFZLEdBQUc7UUFDcEIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsb0JBQW9CLEVBQUUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJO1FBQ2hDLGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixZQUFZLEVBQUUsSUFBSTtRQUNsQixPQUFPLEVBQUUsS0FBSztRQUNkLG9CQUFvQixFQUFFLEtBQUs7S0FDNUIsQ0FBQTtJQTBRSCw0QkFBQztDQUFBLEFBdFJELENBQW1ELGlCQUFTLEdBc1IzRDtrQkF0Um9CLHFCQUFxQiJ9