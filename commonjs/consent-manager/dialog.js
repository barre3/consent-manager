"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var styled_1 = __importDefault(require("@emotion/styled"));
var react_2 = require("@emotion/react");
var nanoid_1 = __importDefault(require("nanoid"));
var font_styles_1 = __importDefault(require("./font-styles"));
var ANIMATION_DURATION = '200ms';
var ANIMATION_EASING = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
var Overlay = (0, styled_1.default)('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(67, 90, 111, 0.699);\n"], ["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(67, 90, 111, 0.699);\n"])));
var openAnimation = (0, react_2.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n"], ["\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n"])));
var Root = (0, styled_1.default)('section')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100vw - 16px);\n  max-height: calc(100% - 16px);\n  width: ", ";\n  margin: 8px;\n  background: #fff;\n  border-radius: 8px;\n  animation: ", " ", " ", " both;\n"], ["\n  ", ";\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100vw - 16px);\n  max-height: calc(100% - 16px);\n  width: ", ";\n  margin: 8px;\n  background: #fff;\n  border-radius: 8px;\n  animation: ", " ", " ", " both;\n"])), font_styles_1.default, function (props) { return props.width; }, openAnimation, ANIMATION_DURATION, ANIMATION_EASING);
var Form = (0, styled_1.default)('form')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n"])));
var Header = (0, styled_1.default)('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(67, 90, 111, 0.079);\n"], ["\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(67, 90, 111, 0.079);\n"])));
var Title = (0, styled_1.default)('h2')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 0;\n  color: #1f4160;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3;\n"], ["\n  margin: 0;\n  color: #1f4160;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3;\n"])));
var HeaderCancelButton = (0, styled_1.default)('button')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n"], ["\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n"])));
var Content = (0, styled_1.default)('div')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  overflow-y: auto;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: 0;\n  font-size: 14px;\n  line-height: 1.2;\n\n  p {\n    margin: 0;\n    &:not(:last-child) {\n      margin-bottom: 0.7em;\n    }\n  }\n\n  a {\n    color: #47b881;\n    &:hover {\n      color: #64c395;\n    }\n    &:active {\n      color: #248953;\n    }\n  }\n"], ["\n  overflow-y: auto;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: 0;\n  font-size: 14px;\n  line-height: 1.2;\n\n  p {\n    margin: 0;\n    &:not(:last-child) {\n      margin-bottom: 0.7em;\n    }\n  }\n\n  a {\n    color: #47b881;\n    &:hover {\n      color: #64c395;\n    }\n    &:active {\n      color: #248953;\n    }\n  }\n"])));
var Buttons = (0, styled_1.default)('div')(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 16px;\n  text-align: right;\n"], ["\n  padding: 16px;\n  text-align: right;\n"])));
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, props) || this;
        _this.handleRootRef = function (node) {
            _this.root = node;
        };
        _this.handleFormRef = function (node) {
            _this.form = node;
        };
        _this.handleOverlayClick = function (e) {
            var onCancel = _this.props.onCancel;
            // Ignore propogated clicks from inside the dialog
            if (onCancel && _this.root && !_this.root.contains(e.target)) {
                onCancel();
            }
        };
        _this.handleEsc = function (e) {
            var onCancel = _this.props.onCancel;
            // Esc key
            if (onCancel && e.keyCode === 27) {
                onCancel();
            }
        };
        _this.titleId = (0, nanoid_1.default)();
        _this.container = document.createElement('div');
        _this.container.setAttribute('data-consent-manager-dialog', '');
        return _this;
    }
    Dialog.prototype.render = function () {
        var _a = this.props, onCancel = _a.onCancel, onSubmit = _a.onSubmit, title = _a.title, children = _a.children, buttons = _a.buttons, width = _a.width;
        var dialog = (react_1.default.createElement(Overlay, { id: "segmentio_overlayDialog", onClick: this.handleOverlayClick },
            react_1.default.createElement(Root, { id: "segmentio_rootDialog", ref: this.handleRootRef, role: "dialog", "aria-modal": true, "aria-labelledby": this.titleId, width: width },
                react_1.default.createElement(Header, { id: "segmentio_headerDialog" },
                    react_1.default.createElement(Title, { id: this.titleId }, title),
                    onCancel && (react_1.default.createElement(HeaderCancelButton, { id: "segmentio_headerCancelBtn", onClick: onCancel, title: "Cancel", "aria-label": "Cancel" }, "\u2715"))),
                react_1.default.createElement(Form, { id: "preferenceDialogForm_".concat(this.titleId), ref: this.handleFormRef, onSubmit: onSubmit },
                    react_1.default.createElement(Content, { id: "segmentio_contentDialog" }, children),
                    react_1.default.createElement(Buttons, { id: "segmentio_buttonsDialog" }, buttons)))));
        return react_dom_1.default.createPortal(dialog, this.container);
    };
    Dialog.prototype.componentDidMount = function () {
        var innerRef = this.props.innerRef;
        if (this.form) {
            var input = this.form.querySelector('input,button');
            if (input) {
                input.focus();
            }
        }
        document.body.appendChild(this.container);
        document.body.addEventListener('keydown', this.handleEsc, false);
        document.body.style.overflow = 'hidden';
        innerRef(this.container);
    };
    Dialog.prototype.componentWillUnmount = function () {
        var innerRef = this.props.innerRef;
        document.body.removeEventListener('keydown', this.handleEsc, false);
        document.body.style.overflow = '';
        document.body.removeChild(this.container);
        innerRef(null);
    };
    Dialog.displayName = 'Dialog';
    Dialog.defaultProps = {
        onCancel: undefined,
        width: '750px'
    };
    return Dialog;
}(react_1.PureComponent));
exports.default = Dialog;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9kaWFsb2cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLHdEQUFnQztBQUNoQywyREFBb0M7QUFDcEMsd0NBQTBDO0FBRTFDLGtEQUEyQjtBQUMzQiw4REFBc0M7QUFFdEMsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUE7QUFDbEMsSUFBTSxnQkFBZ0IsR0FBRyxnQ0FBZ0MsQ0FBQTtBQUV6RCxJQUFNLE9BQU8sR0FBRyxJQUFBLGdCQUFNLEVBQUMsS0FBSyxDQUFDLDhRQUFBLDJNQVc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsT0FBRyxpQkFBUyw0TEFBQSx3SEFTOUIsSUFBQSxDQUFBO0FBTUQsSUFBTSxJQUFJLEdBQUcsSUFBQSxnQkFBTSxFQUFDLFNBQVMsQ0FBQyxnVEFBVyxNQUNyQyxFQUFVLCtIQUtILEVBQW9CLDhFQUloQixFQUFhLEdBQUksRUFBa0IsR0FBSSxFQUFnQixVQUNyRSxLQVZHLHFCQUFVLEVBS0gsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsRUFJaEIsYUFBYSxFQUFJLGtCQUFrQixFQUFJLGdCQUFnQixDQUNyRSxDQUFBO0FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBQSxnQkFBTSxFQUFDLE1BQU0sQ0FBQyxzSUFBQSxtRUFJMUIsSUFBQSxDQUFBO0FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxFQUFDLEtBQUssQ0FBQyxvUEFBQSxpTEFPM0IsSUFBQSxDQUFBO0FBRUQsSUFBTSxLQUFLLEdBQUcsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxzS0FBQSxtR0FNekIsSUFBQSxDQUFBO0FBRUQsSUFBTSxrQkFBa0IsR0FBRyxJQUFBLGdCQUFNLEVBQUMs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