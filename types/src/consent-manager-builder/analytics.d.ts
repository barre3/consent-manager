import { Destination, DefaultDestinationBehavior, CategoryPreferences } from '../types';
interface AnalyticsParams {
    writeKey: string;
    destinations: Destination[];
    destinationPreferences: CategoryPreferences | null | undefined;
    isConsentRequired: boolean;
    shouldReload?: boolean;
    devMode?: boolean;
    defaultDestinationBehavior?: DefaultDestinationBehavior;
    categoryPreferences: CategoryPreferences | null | undefined;
}
export default function conditionallyLoadAnalytics({ writeKey, destinations, destinationPreferences, isConsentRequired, shouldReload, devMode, defaultDestinationBehavior, categoryPreferences }: AnalyticsParams): void;
export {};
