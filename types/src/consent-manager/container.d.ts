import React from 'react';
import { Destination, CategoryPreferences, CustomCategories, DefaultDestinationBehavior, ActionsBlockProps, PreferenceDialogTemplate, CloseBehavior } from '../types';
export declare function openDialog(): void;
export interface CloseBehaviorFunction {
    (categories: CategoryPreferences): CategoryPreferences;
}
interface ContainerProps {
    setPreferences: (prefs: CategoryPreferences) => void;
    saveConsent: (newPreferences?: CategoryPreferences, shouldReload?: boolean, devMode?: boolean) => void;
    resetPreferences: () => void;
    closeBehavior?: CloseBehavior | CloseBehaviorFunction;
    destinations: Destination[];
    customCategories?: CustomCategories | undefined;
    newDestinations: Destination[];
    preferences: CategoryPreferences;
    havePreferencesChanged: boolean;
    isConsentRequired: boolean;
    implyConsentOnInteraction: boolean;
    bannerContent: React.ReactNode;
    bannerSubContent: string | undefined;
    bannerActionsBlock?: ((props: ActionsBlockProps) => React.ReactElement) | true;
    bannerTextColor: string;
    bannerBackgroundColor: string;
    bannerHideCloseButton: boolean;
    bannerAsModal?: boolean;
    preferencesDialogTitle: React.ReactNode;
    preferencesDialogContent: React.ReactNode;
    cancelDialogTitle: React.ReactNode;
    cancelDialogContent: React.ReactNode;
    workspaceAddedNewDestinations?: boolean;
    defaultDestinationBehavior?: DefaultDestinationBehavior;
    preferencesDialogTemplate?: PreferenceDialogTemplate;
}
declare const Container: React.FC<ContainerProps>;
export default Container;
