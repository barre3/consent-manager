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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePreferences = exports.onPreferencesSaved = exports.loadPreferences = void 0;
// TODO: remove duplicate cookie library from bundle
var js_cookie_1 = __importDefault(require("js-cookie"));
var top_domain_1 = __importDefault(require("@segment/top-domain"));
var events_1 = require("events");
var DEFAULT_COOKIE_NAME = 'tracking-preferences';
var COOKIE_DEFAULT_EXPIRES = 365;
// TODO: harden against invalid cookies
// TODO: harden against different versions of cookies
function loadPreferences(cookieName) {
    var preferences = js_cookie_1.default.getJSON(cookieName || DEFAULT_COOKIE_NAME);
    if (!preferences) {
        return {};
    }
    return {
        destinationPreferences: preferences.destinations,
        customPreferences: preferences.custom
    };
}
exports.loadPreferences = loadPreferences;
var emitter = new events_1.EventEmitter();
/**
 * Subscribes to consent preferences changing over time and returns
 * a cleanup function that can be invoked to remove the instantiated listener.
 *
 * @param listener a function to be invoked when ConsentPreferences are saved
 */
function onPreferencesSaved(listener) {
    emitter.on('preferencesSaved', listener);
    return function () { return emitter.off('preferencesSaved', listener); };
}
exports.onPreferencesSaved = onPreferencesSaved;
function savePreferences(_a) {
    var destinationPreferences = _a.destinationPreferences, customPreferences = _a.customPreferences, cookieDomain = _a.cookieDomain, cookieName = _a.cookieName, cookieExpires = _a.cookieExpires, _b = _a.cookieAttributes, cookieAttributes = _b === void 0 ? {} : _b;
    var wd = window;
    if (wd.analytics) {
        wd.analytics.identify({
            destinationTrackingPreferences: destinationPreferences,
            customTrackingPreferences: customPreferences
        });
    }
    var domain = cookieDomain || (0, top_domain_1.default)(window.location.href);
    var expires = cookieExpires || COOKIE_DEFAULT_EXPIRES;
    var value = {
        version: 1,
        destinations: destinationPreferences,
        custom: customPreferences
    };
    js_cookie_1.default.set(cookieName || DEFAULT_COOKIE_NAME, value, __assign({ expires: expires, domain: domain }, cookieAttributes));
    emitter.emit('preferencesSaved', {
        destinationPreferences: destinationPreferences,
        customPreferences: customPreferences
    });
}
exports.savePreferences = savePreferences;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyLWJ1aWxkZXIvcHJlZmVyZW5jZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBb0Q7QUFDcEQsd0RBQXFEO0FBQ3JELG1FQUEyQztBQUUzQyxpQ0FBcUM7QUFFckMsSUFBTSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQTtBQUNsRCxJQUFNLHNCQUFzQixHQUFHLEdBQUcsQ0FBQTtBQVFsQyx1Q0FBdUM7QUFDdkMscURBQXFEO0FBQ3JELFNBQWdCLGVBQWUsQ0FBQyxVQUFtQjtJQUNqRCxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksbUJBQW1CLENBQUMsQ0FBQTtJQUV0RSxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2hCLE9BQU8sRUFBRSxDQUFBO0tBQ1Y7SUFFRCxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsV0FBVyxDQUFDLFlBQW1DO1FBQ3ZFLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxNQUE2QjtLQUM3RCxDQUFBO0FBQ0gsQ0FBQztBQVhELDBDQVdDO0FBU0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENBQUE7QUFFbEM7Ozs7O0dBS0c7QUFDSCxTQUFnQixrQkFBa0IsQ0FBQyxRQUFzQztJQUN2RSxPQUFPLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ3hDLE9BQU8sY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEVBQXpDLENBQXlDLENBQUE7QUFDeEQsQ0FBQztBQUhELGdEQUdDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEVBT2Q7UUFOaEIsc0JBQXNCLDRCQUFBLEVBQ3RCLGlCQUFpQix1QkFBQSxFQUNqQixZQUFZLGtCQUFBLEVBQ1osVUFBVSxnQkFBQSxFQUNWLGFBQWEsbUJBQUEsRUFDYix3QkFBcUIsRUFBckIsZ0JBQWdCLG1CQUFHLEVBQUUsS0FBQTtJQUVyQixJQUFNLEVBQUUsR0FBRyxNQUF1QixDQUFBO0lBQ2xDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRTtRQUNoQixFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNwQiw4QkFBOEIsRUFBRSxzQkFBc0I7WUFDdEQseUJBQXlCLEVBQUUsaUJBQWlCO1NBQzdDLENBQUMsQ0FBQTtLQUNIO0lBRUQsSUFBTSxNQUFNLEdBQUcsWUFBWSxJQUFJLElBQUEsb0JBQVMsRUFBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzlELElBQU0sT0FBTyxHQUFHLGFBQWEsSUFBSSxzQkFBc0IsQ0FBQTtJQUN2RCxJQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sRUFBRSxDQUFDO1FBQ1YsWUFBWSxFQUFFLHNCQUFzQjtRQUNwQyxNQUFNLEVBQUUsaUJBQWlCO0tBQzFCLENBQUE7SUFFRCxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksbUJBQW1CLEVBQUUsS0FBSyxhQUNsRCxPQUFPLFNBQUEsRUFDUCxNQUFNLFFBQUEsSUFDSCxnQkFBZ0IsRUFDbkIsQ0FBQTtJQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDL0Isc0JBQXNCLHdCQUFBO1FBQ3RCLGlCQUFpQixtQkFBQTtLQUNsQixDQUFDLENBQUE7QUFDSixDQUFDO0FBbENELDBDQWtDQyJ9