"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("url");
var sinon_1 = __importDefault(require("sinon"));
var preferences_1 = require("../../consent-manager-builder/preferences");
describe('preferences', function () {
    beforeEach(function () {
        window = {
            location: {
                href: 'http://localhost/'
            }
        };
        document = {
            createElement: function (type) {
                if (type === 'a') {
                    return new url_1.URL('http://localhost/');
                }
                return;
            }
        };
    });
    test('loadPreferences() returns preferences when cookie exists', function () {
        document.cookie =
            'tracking-preferences={%22version%22:1%2C%22destinations%22:{%22Amplitude%22:true}%2C%22custom%22:{%22functional%22:true}}';
        expect((0, preferences_1.loadPreferences)()).toMatchObject({
            destinationPreferences: {
                Amplitude: true
            },
            customPreferences: {
                functional: true
            }
        });
    });
    test('loadPreferences(cookieName) returns preferences when cookie exists', function () {
        document.cookie =
            'custom-tracking-preferences={%22version%22:1%2C%22destinations%22:{%22Amplitude%22:true}%2C%22custom%22:{%22functional%22:true}}';
        expect((0, preferences_1.loadPreferences)('custom-tracking-preferences')).toMatchObject({
            destinationPreferences: {
                Amplitude: true
            },
            customPreferences: {
                functional: true
            }
        });
    });
    test('savePreferences() saves the preferences', function () {
        var ajsIdentify = sinon_1.default.spy();
        // @ts-ignore
        window.analytics = { identify: ajsIdentify };
        document.cookie = '';
        var destinationPreferences = {
            Amplitude: true
        };
        var customPreferences = {
            functional: true
        };
        (0, preferences_1.savePreferences)({
            destinationPreferences: destinationPreferences,
            customPreferences: customPreferences,
            cookieDomain: undefined
        });
        expect(ajsIdentify.calledOnce).toBe(true);
        expect(ajsIdentify.args[0][0]).toMatchObject({
            destinationTrackingPreferences: destinationPreferences,
            customTrackingPreferences: customPreferences
        });
        expect(document.cookie.includes('tracking-preferences={%22version%22:1%2C%22destinations%22:{%22Amplitude%22:true}%2C%22custom%22:{%22functional%22:true}}')).toBe(true);
    });
    test('savePreferences() sets the cookie domain', function () {
        var ajsIdentify = sinon_1.default.spy();
        // @ts-ignore
        window.analytics = { identify: ajsIdentify };
        document.cookie = '';
        var destinationPreferences = {
            Amplitude: true
        };
        (0, preferences_1.savePreferences)({
            destinationPreferences: destinationPreferences,
            customPreferences: undefined,
            cookieDomain: 'example.com'
        });
        expect(ajsIdentify.calledOnce).toBe(true);
        expect(ajsIdentify.args[0][0]).toMatchObject({
            destinationTrackingPreferences: destinationPreferences,
            customTrackingPreferences: undefined
        });
        // TODO: actually check domain
        // expect(document.cookie.includes('domain=example.com')).toBe(true)
    });
    test('savePreferences() sets the cookie with custom key', function () {
        var ajsIdentify = sinon_1.default.spy();
        // @ts-ignore
        window.analytics = { identify: ajsIdentify };
        document.cookie = '';
        var destinationPreferences = {
            Amplitude: true
        };
        (0, preferences_1.savePreferences)({
            destinationPreferences: destinationPreferences,
            customPreferences: undefined,
            cookieDomain: undefined,
            cookieName: 'custom-tracking-preferences'
        });
        expect(ajsIdentify.calledOnce).toBe(true);
        expect(ajsIdentify.args[0][0]).toMatchObject({
            destinationTrackingPreferences: destinationPreferences,
            customTrackingPreferences: undefined
        });
        expect(document.cookie.includes('custom-tracking-preferences')).toBe(true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZXMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fX3Rlc3RzX18vY29uc2VudC1tYW5hZ2VyLWJ1aWxkZXIvcHJlZmVyZW5jZXMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJCQUF5QjtBQUN6QixnREFBeUI7QUFDekIseUVBQTRGO0FBRTVGLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFDdEIsVUFBVSxDQUFDO1FBQ1QsTUFBTSxHQUFHO1lBQ1AsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxtQkFBbUI7YUFDMUI7U0FDNEIsQ0FBQTtRQUUvQixRQUFRLEdBQUc7WUFDVCxhQUFhLFlBQUMsSUFBWTtnQkFDeEIsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO29CQUNoQixPQUFPLElBQUksU0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7aUJBQ3BDO2dCQUVELE9BQU07WUFDUixDQUFDO1NBQ1UsQ0FBQTtJQUNmLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLDBEQUEwRCxFQUFFO1FBQy9ELFFBQVEsQ0FBQyxNQUFNO1lBQ2IsMkhBQTJILENBQUE7UUFFN0gsTUFBTSxDQUFDLElBQUEsNkJBQWUsR0FBRSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3RDLHNCQUFzQixFQUFFO2dCQUN0QixTQUFTLEVBQUUsSUFBSTthQUNoQjtZQUNELGlCQUFpQixFQUFFO2dCQUNqQixVQUFVLEVBQUUsSUFBSTthQUNqQjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLG9FQUFvRSxFQUFFO1FBQ3pFLFFBQVEsQ0FBQyxNQUFNO1lBQ2Isa0lBQWtJLENBQUE7UUFFcEksTUFBTSxDQUFDLElBQUEsNkJBQWUsRUFBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ25FLHNCQUFzQixFQUFFO2dCQUN0QixTQUFTLEVBQUUsSUFBSTth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