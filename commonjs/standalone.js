"use strict";
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
exports.preferences = exports.inEU = exports.doNotTrack = exports.openConsentManager = exports.version = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var in_eu_1 = __importDefault(require("@segment/in-eu"));
exports.inEU = in_eu_1.default;
var in_regions_1 = __importDefault(require("@segment/in-regions"));
var _1 = require(".");
Object.defineProperty(exports, "openConsentManager", { enumerable: true, get: function () { return _1.openConsentManager; } });
Object.defineProperty(exports, "doNotTrack", { enumerable: true, get: function () { return _1.doNotTrack; } });
var preferences = __importStar(require("./consent-manager-builder/preferences"));
exports.preferences = preferences;
exports.version = process.env.VERSION;
var props = {};
var containerRef;
var localWindow = window;
if (localWindow.consentManagerConfig && typeof localWindow.consentManagerConfig === 'function') {
    props = localWindow.consentManagerConfig({
        React: react_1.default,
        version: exports.version,
        openConsentManager: _1.openConsentManager,
        doNotTrack: _1.doNotTrack,
        inEU: in_eu_1.default,
        preferences: preferences,
        inRegions: in_regions_1.default
    });
    containerRef = props.container;
}
else {
    throw new Error("window.consentManagerConfig should be a function");
}
if (!containerRef) {
    throw new Error('ConsentManager: container is required');
}
if (!props.writeKey) {
    throw new Error('ConsentManager: writeKey is required');
}
if (!props.bannerContent) {
    throw new Error('ConsentManager: bannerContent is required');
}
if (!props.preferencesDialogContent) {
    throw new Error('ConsentManager: preferencesDialogContent is required');
}
if (!props.cancelDialogContent) {
    throw new Error('ConsentManager: cancelDialogContent is required');
}
if (typeof props.implyConsentOnInteraction === 'string') {
    props.implyConsentOnInteraction = props.implyConsentOnInteraction === 'true';
}
if (props.closeBehavior !== undefined && typeof props.closeBehavior === 'string') {
    var options = ['accept', 'deny', 'dismiss'];
    if (!options.includes(props.closeBehavior)) {
        throw new Error("ConsentManager: closeBehavior should be one of ".concat(options));
    }
}
var container = document.querySelector(containerRef);
if (!container) {
    throw new Error('ConsentManager: container not found');
}
react_dom_1.default.render(react_1.default.createElement(_1.ConsentManager, __assign({}, props)), container);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmRhbG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGFuZGFsb25lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXlCO0FBQ3pCLHdEQUFnQztBQUNoQyx5REFBaUM7QUFPUSxlQVBsQyxlQUFJLENBT2tDO0FBTjdDLG1FQUEyQztBQUMzQyxzQkFBa0U7QUFLekQsbUdBTGdCLHFCQUFrQixPQUtoQjtBQUFFLDJGQUxnQixhQUFVLE9BS2hCO0FBSHZDLGlGQUFvRTtBQUdyQixrQ0FBVztBQUQ3QyxRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQTtBQUcxQyxJQUFJLEtBQUssR0FBaUMsRUFBRSxDQUFBO0FBQzVDLElBQUksWUFBZ0MsQ0FBQTtBQUVwQyxJQUFNLFdBQVcsR0FBRyxNQUF3QyxDQUFBO0FBRTVELElBQUksV0FBVyxDQUFDLG9CQUFvQixJQUFJLE9BQU8sV0FBVyxDQUFDLG9CQUFvQixLQUFLLFVBQVUsRUFBRTtJQUM5RixLQUFLLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZDLEtBQUssaUJBQUE7UUFDTCxPQUFPLGlCQUFBO1FBQ1Asa0JBQWtCLHVCQUFBO1FBQ2xCLFVBQVUsZUFBQTtRQUNWLElBQUksaUJBQUE7UUFDSixXQUFXLGFBQUE7UUFDWCxTQUFTLHNCQUFBO0tBQ1YsQ0FBQyxDQUFBO0lBQ0YsWUFBWSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUE7Q0FDL0I7S0FBTTtJQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQTtDQUNwRTtBQUVELElBQUksQ0FBQyxZQUFZLEVBQUU7SUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO0NBQ3pEO0FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7SUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFBO0NBQ3hEO0FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7SUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFBO0NBQzdEO0FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRTtJQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUE7Q0FDeEU7QUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFO0lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQTtDQUNuRTtBQUVELElBQUksT0FBTyxLQUFLLENBQUMseUJBQXlCLEtBQUssUUFBUSxFQUFFO0lBQ3ZELEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUMseUJBQXlCLEtBQUssTUFBTSxDQUFBO0NBQzdFO0FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssQ0FBQyxhQUFhLEtBQUssUUFBUSxFQUFFO0lBQ2hGLElBQU0sT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUU3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBa0QsT0FBTyxDQUFFLENBQUMsQ0FBQTtLQUM3RTtDQUNGO0FBRUQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUN0RCxJQUFJLENBQUMsU0FBUyxFQUFFO0lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO0NBQ3ZEO0FBRUQsbUJBQVEsQ0FBQyxNQUFNLENBQUMsOEJBQUMsaUJBQWMsZUFBTSxLQUE2QixFQUFJLEVBQUUsU0FBUyxDQUFDLENBQUEifQ==