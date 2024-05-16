"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
describe('doNotTrack', function () {
    beforeEach(function () {
        navigator = {};
        window = {};
    });
    test('doNotTrack() supports standard API', function () {
        // @ts-ignore
        navigator.doNotTrack = '1';
        expect((0, __1.doNotTrack)()).toBe(true);
        // @ts-ignore
        navigator.doNotTrack = '0';
        expect((0, __1.doNotTrack)()).toBe(false);
        // @ts-ignore
        navigator.doNotTrack = 'unspecified';
        expect((0, __1.doNotTrack)()).toBe(null);
    });
    test('doNotTrack() supports window', function () {
        // @ts-ignore
        navigator.doNotTrack = undefined;
        // @ts-ignore
        window.doNotTrack = '1';
        expect((0, __1.doNotTrack)()).toBe(true);
        // @ts-ignore
        window.doNotTrack = '0';
        expect((0, __1.doNotTrack)()).toBe(false);
        // @ts-ignore
        window.doNotTrack = 'unspecified';
        expect((0, __1.doNotTrack)()).toBeNull();
    });
    test('doNotTrack() support yes/no', function () {
        // @ts-ignore
        navigator.doNotTrack = 'yes';
        expect((0, __1.doNotTrack)()).toBe(true);
        // @ts-ignore
        navigator.doNotTrack = 'no';
        expect((0, __1.doNotTrack)()).toBe(false);
    });
    test('doNotTrack() supports ms prefix', function () {
        // @ts-ignore
        navigator.doNotTrack = undefined;
        // @ts-ignore
        window.doNotTrack = undefined;
        // @ts-ignore
        navigator.msDoNotTrack = '1';
        expect((0, __1.doNotTrack)()).toBe(true);
        // @ts-ignore
        navigator.msDoNotTrack = '0';
        expect((0, __1.doNotTrack)()).toBe(false);
        // @ts-ignore
        navigator.msDoNotTrack = 'unspecified';
        expect((0, __1.doNotTrack)()).toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUFnQztBQUVoQyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ3JCLFVBQVUsQ0FBQztRQUNULFNBQVMsR0FBRyxFQUFlLENBQUE7UUFDM0IsTUFBTSxHQUFHLEVBQWdDLENBQUE7SUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsb0NBQW9DLEVBQUU7UUFDekMsYUFBYTtRQUNiLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFBO1FBQzFCLE1BQU0sQ0FBQyxJQUFBLGNBQVUsR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRS9CLGFBQWE7UUFDYixTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTtRQUMxQixNQUFNLENBQUMsSUFBQSxjQUFVLEdBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVoQyxhQUFhO1FBQ2IsU0FBUyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUE7UUFDcEMsTUFBTSxDQUFDLElBQUEsY0FBVSxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakMsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsOEJBQThCLEVBQUU7UUFDbkMsYUFBYTtRQUNiLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFBO1FBRWhDLGFBQWE7UUFDYixNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTtRQUN2QixNQUFNLENBQUMsSUFBQSxjQUFVLEdBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUUvQixhQUFhO1FBQ2IsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUE7UUFDdkIsTUFBTSxDQUFDLElBQUEsY0FBVSxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEMsYUFBYTtRQUNiLE1BQU0sQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFBO1FBQ2pDLE1BQU0sQ0FBQyxJQUFBLGNBQVUsR0FBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDakMsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsNkJBQTZCLEVBQUU7UUFDbEMsYUFBYTtRQUNiLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1FBQzVCLE1BQU0sQ0FBQyxJQUFBLGNBQVUsR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRS9CLGFBQWE7UUFDYixTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtRQUMzQixNQUFNLENBQUMsSUFBQSxjQUFVLEdBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxpQ0FBaUMsRUFBRTtRQUN0QyxhQUFhO1FBQ2IsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7UUFDaEMsYUFBYTtRQUNiLE1BQU0sQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFBO1FBRTdCLGFBQWE7UUFDYixTQUFTLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQTtRQUM1QixNQUFNLENBQUMsSUFBQSxjQUFVLEdBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUUvQixhQUFhO1FBQ2IsU0FBUyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUE7UUFDNUIsTUFBTSxDQUFDLElBQUEsY0FBVSxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEMsYUFBYTtRQUNiLFNBQVMsQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxJQUFBLGNBQVUsR0FBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDakMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9