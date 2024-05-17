import React, { PureComponent } from 'react';
import { ActionsBlockProps } from '../types';
interface BannerProps {
    innerRef: (node: HTMLElement | null) => void;
    onClose: () => void;
    onChangePreferences: () => void;
    content: React.ReactNode;
    subContent: string | undefined;
    actionsBlock?: ((props: ActionsBlockProps) => React.ReactElement) | true;
    backgroundColor: string;
    textColor: string;
    onAcceptAll: () => void;
    onDenyAll: () => void;
    hideCloseButton: boolean;
    asModal?: boolean;
}
export default class Banner extends PureComponent<BannerProps> {
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
