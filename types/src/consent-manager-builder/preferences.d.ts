import { CookieAttributes } from 'js-cookie';
import { Preferences } from '../types';
import { EventEmitter } from 'events';
export interface PreferencesManager {
    loadPreferences(cookieName?: string): Preferences;
    onPreferencesSaved(listener: (prefs: Preferences) => void): void;
    savePreferences(prefs: SavePreferences): void;
}
export declare function loadPreferences(cookieName?: string): Preferences;
type SavePreferences = Preferences & {
    cookieDomain?: string;
    cookieName?: string;
    cookieExpires?: number;
    cookieAttributes?: CookieAttributes;
};
/**
 * Subscribes to consent preferences changing over time and returns
 * a cleanup function that can be invoked to remove the instantiated listener.
 *
 * @param listener a function to be invoked when ConsentPreferences are saved
 */
export declare function onPreferencesSaved(listener: (prefs: Preferences) => void): () => EventEmitter;
export declare function savePreferences({ destinationPreferences, customPreferences, cookieDomain, cookieName, cookieExpires, cookieAttributes }: SavePreferences): void;
export {};
