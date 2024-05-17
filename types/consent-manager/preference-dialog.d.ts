import React, { PureComponent } from 'react';
import { Destination, CustomCategories, CategoryPreferences, PreferenceDialogTemplate } from '../types';
interface PreferenceDialogProps {
    innerRef: (element: HTMLElement | null) => void;
    onCancel: () => void;
    onSave: () => void;
    onChange: (name: string, value: boolean) => void;
    marketingDestinations: Destination[];
    advertisingDestinations: Destination[];
    functionalDestinations: Destination[];
    marketingAndAnalytics?: boolean | null;
    advertising?: boolean | null;
    functional?: boolean | null;
    customCategories?: CustomCategories;
    destinations: Destination[];
    preferences: CategoryPreferences;
    title: React.ReactNode;
    content: React.ReactNode;
    preferencesDialogTemplate?: PreferenceDialogTemplate;
}
export default class PreferenceDialog extends PureComponent<PreferenceDialogProps, {}> {
    static displayName: string;
    static defaultProps: {
        marketingAndAnalytics: null;
        advertising: null;
        functional: null;
    };
    render(): React.JSX.Element;
    handleChange: (e: any) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export {};
