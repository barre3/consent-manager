import React, { PureComponent } from 'react';
import { PreferenceDialogTemplate } from '../types';
interface Props {
    innerRef: (node: HTMLElement) => void;
    onBack: () => void;
    onConfirm: () => void;
    title: React.ReactNode;
    content: React.ReactNode;
    preferencesDialogTemplate?: PreferenceDialogTemplate;
}
export default class CancelDialog extends PureComponent<Props> {
    static displayName: string;
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleSubmit: (e: any) => void;
    handleEsc: (e: KeyboardEvent) => void;
}
export {};
