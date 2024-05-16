import React, { PureComponent } from 'react';
interface DialogProps {
    innerRef: (element: HTMLElement | null) => void;
    onCancel?: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    title: React.ReactNode;
    buttons: React.ReactNode;
    width?: string;
}
export default class Dialog extends PureComponent<DialogProps, {}> {
    static displayName: string;
    private titleId;
    private container;
    private root;
    private form;
    static defaultProps: {
        onCancel: undefined;
        width: string;
    };
    constructor(props: DialogProps);
    render(): React.ReactPortal;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleRootRef: (node: HTMLElement) => void;
    handleFormRef: (node: HTMLFormElement) => void;
    handleOverlayClick: (e: any) => void;
    handleEsc: (e: KeyboardEvent) => void;
}
export {};
