import CMB from './consent-manager-builder';
import CM from './consent-manager';
export { openDialog as openConsentManager } from './consent-manager/container';
export { loadPreferences, savePreferences, onPreferencesSaved } from './consent-manager-builder/preferences';
export declare const ConsentManagerBuilder: typeof CMB;
export declare const ConsentManager: typeof CM;
export declare function doNotTrack(): boolean | null;
