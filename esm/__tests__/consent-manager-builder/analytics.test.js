import sinon from 'sinon';
import conditionallyLoadAnalytics from '../../consent-manager-builder/analytics';
describe('analytics', function () {
    var wd;
    beforeEach(function () {
        window = {};
        wd = window;
        wd.analytics = {
            /*eslint-disable */
            track: function (_event, _properties, _optionsWithConsent, _callback) { },
            addSourceMiddleware: function (_middleware) { }
            /*eslint-enable */
        };
    });
    test('loads analytics.js with preferences', function () {
        var ajsLoad = sinon.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: true
        };
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        expect(ajsLoad.calledOnce).toBe(true);
        expect(ajsLoad.args[0][0]).toBe(writeKey);
        expect(ajsLoad.args[0][1]).toMatchObject({
            integrations: {
                All: false,
                Amplitude: true,
                'Segment.io': true
            }
        });
    });
    test('doesn՚t load analytics.js when there are no preferences', function () {
        var ajsLoad = sinon.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = null;
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        expect(ajsLoad.notCalled).toBe(true);
    });
    test('doesn՚t load analytics.js when all preferences are false', function () {
        var ajsLoad = sinon.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: false
        };
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        expect(ajsLoad.notCalled).toBe(true);
    });
    test('reloads the page when analytics.js has already been initialised', function () {
        wd.analytics.load = function load() {
            this.initialized = true;
        };
        jest.spyOn(window.location, 'reload');
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: true
        };
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        expect(window.location.reload).toHaveBeenCalled();
    });
    test('should allow the reload behvaiour to be disabled', function () {
        var reload = sinon.spy();
        wd.analytics.load = function load() {
            this.initialized = true;
        };
        wd.location = { reload: reload };
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: true
        };
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            shouldReload: false,
            categoryPreferences: {}
        });
        expect(reload.calledOnce).toBe(false);
    });
    test('loads analytics.js normally when consent isn՚t required', function () {
        var ajsLoad = sinon.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = null;
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: false,
            categoryPreferences: {}
        });
        expect(ajsLoad.calledOnce).toBe(true);
        expect(ajsLoad.args[0][0]).toBe(writeKey);
        expect(ajsLoad.args[0][1]).toBeUndefined();
    });
    test('still applies preferences when consent isn՚t required', function () {
        var ajsLoad = sinon.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: true
        };
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: false,
            categoryPreferences: {}
        });
        expect(ajsLoad.calledOnce).toBe(true);
        expect(ajsLoad.args[0][0]).toBe(writeKey);
        expect(ajsLoad.args[0][1]).toMatchObject({
            integrations: {
                All: false,
                Amplitude: true,
                'Segment.io': true
            }
        });
    });
    test('sets new destinations to false if defaultDestinationBehavior is set to "disable"', function () {
        var ajsLoad = sinon.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [
            { id: 'Amplitude' },
            { id: 'Google Analytics' }
        ];
        var destinationPreferences = {
            Amplitude: true
        };
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: false,
            shouldReload: true,
            defaultDestinationBehavior: 'disable',
            categoryPreferences: {}
        });
        expect(ajsLoad.args[0][1]).toMatchObject({
            integrations: {
                All: false,
                Amplitude: true,
                'Google Analytics': false,
                'Segment.io': true
            }
        });
    });
    test('sets new destinations to true if defaultDestinationBehavior is set to "enable"', function () {
        var ajsLoad = sinon.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [
            { id: 'Amplitude' },
            { id: 'Google Analytics' }
        ];
        var destinationPreferences = {
            Amplitude: true
        };
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: false,
            shouldReload: true,
            defaultDestinationBehavior: 'enable',
            categoryPreferences: {}
        });
        expect(ajsLoad.args[0][1]).toMatchObject({
            integrations: {
                All: false,
                Amplitude: true,
                'Google Analytics': true,
                'Segment.io': true
            }
        });
    });
    test('Set devMode on true to disabled analytics load', function () {
        var ajsLoad = sinon.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: true
        };
        conditionallyLoadAnalytics({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: false,
            categoryPreferences: {},
            devMode: true
        });
        expect(ajsLoad.calledOnce).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvX190ZXN0c19fL2NvbnNlbnQtbWFuYWdlci1idWlsZGVyL2FuYWx5dGljcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUV6QixPQUFPLDBCQUEwQixNQUFNLHlDQUF5QyxDQUFBO0FBRWhGLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDcEIsSUFBSSxFQUFFLENBQUE7SUFFTixVQUFVLENBQUM7UUFDVCxNQUFNLEdBQUcsRUFBbUIsQ0FBQTtRQUM1QixFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQ1gsRUFBRSxDQUFDLFNBQVMsR0FBRztZQUNiLG1CQUFtQjtZQUNuQixLQUFLLEVBQUUsVUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsSUFBTSxDQUFDO1lBQ2xFLG1CQUFtQixFQUFFLFVBQUMsV0FBdUIsSUFBTSxDQUFDO1lBQ3BELGtCQUFrQjtTQUNuQixDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMscUNBQXFDLEVBQUU7UUFDMUMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTtRQUMzQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUE7UUFDdEIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQWlCLENBQUMsQ0FBQTtRQUN6RCxJQUFNLHNCQUFzQixHQUFHO1lBQzdCLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUE7UUFFRCwwQkFBMEIsQ0FBQztZQUN6QixRQUFRLFVBQUE7WUFDUixZQUFZLGNBQUE7WUFDWixzQkFBc0Isd0JBQUE7WUFDdEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixtQkFBbUIsRUFBRSxF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