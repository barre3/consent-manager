"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var analytics_1 = __importDefault(require("../../consent-manager-builder/analytics"));
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
        var ajsLoad = sinon_1.default.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: true
        };
        (0, analytics_1.default)({
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
        var ajsLoad = sinon_1.default.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = null;
        (0, analytics_1.default)({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        expect(ajsLoad.notCalled).toBe(true);
    });
    test('doesn՚t load analytics.js when all preferences are false', function () {
        var ajsLoad = sinon_1.default.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: false
        };
        (0, analytics_1.default)({
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
        (0, analytics_1.default)({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        (0, analytics_1.default)({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        expect(window.location.reload).toHaveBeenCalled();
    });
    test('should allow the reload behvaiour to be disabled', function () {
        var reload = sinon_1.default.spy();
        wd.analytics.load = function load() {
            this.initialized = true;
        };
        wd.location = { reload: reload };
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: true
        };
        (0, analytics_1.default)({
            writeKey: writeKey,
            destinations: destinations,
            destinationPreferences: destinationPreferences,
            isConsentRequired: true,
            categoryPreferences: {}
        });
        (0, analytics_1.default)({
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
        var ajsLoad = sinon_1.default.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = null;
        (0, analytics_1.default)({
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
        var ajsLoad = sinon_1.default.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: true
        };
        (0, analytics_1.default)({
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
        var ajsLoad = sinon_1.default.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [
            { id: 'Amplitude' },
            { id: 'Google Analytics' }
        ];
        var destinationPreferences = {
            Amplitude: true
        };
        (0, analytics_1.default)({
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
        var ajsLoad = sinon_1.default.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [
            { id: 'Amplitude' },
            { id: 'Google Analytics' }
        ];
        var destinationPreferences = {
            Amplitude: true
        };
        (0, analytics_1.default)({
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
        var ajsLoad = sinon_1.default.spy();
        wd.analytics.load = ajsLoad;
        var writeKey = '123';
        var destinations = [{ id: 'Amplitude' }];
        var destinationPreferences = {
            Amplitude: true
        };
        (0, analytics_1.default)({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvX190ZXN0c19fL2NvbnNlbnQtbWFuYWdlci1idWlsZGVyL2FuYWx5dGljcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQXlCO0FBRXpCLHNGQUFnRjtBQUVoRixRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ3BCLElBQUksRUFBRSxDQUFBO0lBRU4sVUFBVSxDQUFDO1FBQ1QsTUFBTSxHQUFHLEVBQW1CLENBQUE7UUFDNUIsRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUNYLEVBQUUsQ0FBQyxTQUFTLEdBQUc7WUFDYixtQkFBbUI7WUFDbkIsS0FBSyxFQUFFLFVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLElBQU0sQ0FBQztZQUNsRSxtQkFBbUIsRUFBRSxVQUFDLFdBQXVCLElBQU0sQ0FBQztZQUNwRCxrQkFBa0I7U0FDbkIsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLHFDQUFxQyxFQUFFO1FBQzFDLElBQU0sT0FBTyxHQUFHLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7UUFDM0IsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLElBQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFpQixDQUFDLENBQUE7UUFDekQsSUFBTSxzQkFBc0IsR0FBRztZQUM3QixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFBO1FBRUQsSUFBQSxtQkFBMEIsRUFBQztZQUN6QixRQUFRLFVBQUE7WUFDUixZQUFZLGNBQUE7WUFDWixzQkFBc0Isd0JBQUE7WUFDdEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQTtRQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3ZDLFlBQVksRUFBRTtnQkFDWixHQUFHLEVBQUUsS0FBSztnQkFDVixTQUFTLEVBQUUsSUFBSTtnQkFDZixZQUFZLEVBQUUsSUFBSTthQUNuQjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLHlEQUF5RCxFQUFFO1FBQzlELElBQU0sT0FBTyxHQUFHLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7UUFDM0IsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLElBQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFpQixDQUFDLENBQUE7UUFDekQsSUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUE7UUFFbkMsSUFBQSxtQkFBMEIsRUFBQztZQUN6QixRQUFRLFVBQUE7WUFDUixZQUFZLGNBQUE7WUFDWixzQkFBc0Isd0JBQUE7WUFDdEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQTtRQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLDBEQUEwRCxFQUFFO1FBQy9ELElBQU0sT0FBTyxHQUFHLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7UUFDM0IsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLElBQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFpQixDQUFDLENBQUE7UUFDekQsSUFBTSxzQkFBc0IsR0FBRztZQUM3QixTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFBO1FBRUQsSUFBQSxtQkFBMEIsRUFBQztZQUN6QixRQUFRLFVBQUE7WUFDUixZQUFZLGNBQUE7WUFDWixzQkFBc0Isd0JBQUE7WUFDdEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQTtRQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLGlFQUFpRSxFQUFFO1FBQ3RFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsSUFBSTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUN6QixDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFFckMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLElBQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFpQixDQUFDLENBQUE7UUFDekQsSUFBTSxzQkFBc0IsR0FBRztZQUM3QixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFBO1FBRUQsSUFBQSxtQkFBMEIsRUFBQztZQUN6QixRQUFRLFVBQUE7WUFDUixZQUFZLGNBQUE7WUFDWixzQkFBc0Isd0JBQUE7WUFDdEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQTtRQUNGLElBQUEsbUJBQTBCLEVBQUM7WUFDekIsUUFBUSxVQUFBO1lBQ1IsWUFBWSxjQUFBO1lBQ1osc0JBQXNCLHdCQUFBO1lBQ3RCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsbUJBQW1CLEVBQUUsRUFBRTtTQUN4QixDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQ25ELENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLGtEQUFrRCxFQUFFO1FBQ3ZELElBQU0sTUFBTSxHQUFHLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLElBQUk7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDekIsQ0FBQyxDQUFBO1FBQ0QsRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUE7UUFDeEIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLElBQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFpQixDQUFDLENBQUE7UUFDekQsSUFBTSxzQkFBc0IsR0FBRztZQUM3QixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFBO1FBRUQsSUFBQSxtQkFBMEIsRUFBQztZQUN6QixRQUFRLFVBQUE7WUFDUixZQUFZLGNBQUE7WUFDWixzQkFBc0Isd0JBQUE7WUFDdEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQTtRQUNGLElBQUEsbUJBQTBCLEVBQUM7WUFDekIsUUFBUSxVQUFBO1lBQ1IsWUFBWSxjQUFBO1lBQ1osc0JBQXNCLHdCQUFBO1lBQ3RCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsbUJBQW1CLEVBQUUsRUFBRTtTQUN4QixDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyx5REFBeUQsRUFBRTtRQUM5RCxJQUFNLE9BQU8sR0FBRyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFBO1FBQzNCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQTtRQUN0QixJQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBaUIsQ0FBQyxDQUFBO1FBQ3pELElBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFBO1FBRW5DLElBQUEsbUJBQTBCLEVBQUM7WUFDekIsUUFBUSxVQUFBO1lBQ1IsWUFBWSxjQUFBO1lBQ1osc0JBQXNCLHdCQUFBO1lBQ3RCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsbUJBQW1CLEVBQUUsRUFBRTtTQUN4QixDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQzVDLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLHVEQUF1RCxFQUFFO1FBQzVELElBQU0sT0FBTyxHQUFHLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7UUFDM0IsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLElBQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFpQixDQUFDLENBQUE7UUFDekQsSUFBTSxzQkFBc0IsR0FBRztZQUM3QixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFBO1FBRUQsSUFBQSxtQkFBMEIsRUFBQztZQUN6QixRQUFRLFVBQUE7WUFDUixZQUFZLGNBQUE7WUFDWixzQkFBc0Isd0JBQUE7WUFDdEIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQTtRQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3ZDLFlBQVksRUFBRTtnQkFDWixHQUFHLEVBQUUsS0FBSztnQkFDVixTQUFTLEVBQUUsSUFBSTtnQkFDZixZQUFZLEVBQUUsSUFBSTthQUNuQjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLGtGQUFrRixFQUFFO1FBQ3ZGLElBQU0sT0FBTyxHQUFHLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7UUFDM0IsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLElBQU0sWUFBWSxHQUFHO1lBQ25CLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBaUI7WUFDbEMsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQWlCO1NBQzFDLENBQUE7UUFDRCxJQUFNLHNCQUFzQixHQUFHO1lBQzdCLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUE7UUFFRCxJQUFBLG1CQUEwQixFQUFDO1lBQ3pCLFFBQVEsVUFBQTtZQUNSLFlBQVksY0FBQTtZQUNaLHNCQUFzQix3QkFBQTtZQUN0QixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLDBCQUEwQixFQUFFLFNBQVM7WUFDckMsbUJBQW1CLEVBQUUsRUFBRTtTQUN4QixDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN2QyxZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsU0FBUyxFQUFFLElBQUk7Z0JBQ2Ysa0JBQWtCLEVBQUUsS0FBSztnQkFDekIsWUFBWSxFQUFFLElBQUk7YUFDbkI7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxnRkFBZ0YsRUFBRTtRQUNyRixJQUFNLE9BQU8sR0FBRyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFBO1FBQzNCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQTtRQUN0QixJQUFNLFlBQVksR0FBRztZQUNuQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQWlCO1lBQ2xDLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFpQjtTQUMxQyxDQUFBO1FBQ0QsSUFBTSxzQkFBc0IsR0FBRztZQUM3QixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFBO1FBRUQsSUFBQSxtQkFBMEIsRUFBQztZQUN6QixRQUFRLFVBQUE7WUFDUixZQUFZLGNBQUE7WUFDWixzQkFBc0Isd0JBQUE7WUFDdEIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixZQUFZLEVBQUUsSUFBSTtZQUNsQiwwQkFBMEIsRUFBRSxRQUFRO1lBQ3BDLG1CQUFtQixFQUFFLEVBQUU7U0FDeEIsQ0FBQyxDQUFBO1FBRUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDdkMsWUFBWSxFQUFFO2dCQUNaLEdBQUcsRUFBRSxLQUFLO2dCQUNWLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLFlBQVksRUFBRSxJQUFJO2FBQ25CO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsZ0RBQWdELEVBQUU7UUFDckQsSUFBTSxPQUFPLEdBQUcsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTtRQUMzQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUE7UUFDdEIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQWlCLENBQUMsQ0FBQTtRQUN6RCxJQUFNLHNCQUFzQixHQUFHO1lBQzdCLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUE7UUFFRCxJQUFBLG1CQUEwQixFQUFDO1lBQ3pCLFFBQVEsVUFBQTtZQUNSLFlBQVksY0FBQTtZQUNaLHNCQUFzQix3QkFBQTtZQUN0QixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=