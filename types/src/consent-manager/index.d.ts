import React, { PureComponent } from 'react';
import { CategoryPreferences, Destination, ConsentManagerProps, PreferenceDialogTemplate } from '../types';
export default class ConsentManager extends PureComponent<ConsentManagerProps, {}> {
    static displayName: string;
    static defaultProps: {
        otherWriteKeys: never[];
        shouldRequireConsent: () => boolean;
        disableSegmentLoad: boolean;
        implyConsentOnInteraction: boolean;
        onError: undefined;
        cookieDomain: undefined;
        cookieName: undefined;
        cookieExpires: undefined;
        cookieAttributes: {};
        customCategories: undefined;
        bannerActionsBlock: undefined;
        bannerHideCloseButton: boolean;
        bannerTextColor: string;
        bannerSubContent: string;
        bannerBackgroundColor: string;
        preferencesDialogTitle: string;
        cancelDialogTitle: string;
        defaultDestinationBehavior: string;
        preferencesDialogTemplate: PreferenceDialogTemplate;
    };
    render(): JSX.Element;
    mergeTemplates: (newProps: PreferenceDialogTemplate, defaultPreferencesDialogTemplate: PreferenceDialogTemplate) => PreferenceDialogTemplate;
    getInitialPreferences: () => {};
    handleMapCustomPreferences: (destinations: Destination[], preferences: CategoryPreferences) => {
        destinationPreferences: {};
        customPreferences: {};
    };
}
