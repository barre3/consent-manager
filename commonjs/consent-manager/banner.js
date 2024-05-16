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
var styled_1 = __importDefault(require("@emotion/styled"));
var font_styles_1 = __importDefault(require("./font-styles"));
var buttons_1 = require("./buttons");
var Overlay = (0, styled_1.default)('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  opacity: 0.8;\n"], ["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  opacity: 0.8;\n"])));
var Centered = (0, styled_1.default)('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 500px;\n  @media (max-width: 767px) {\n    width: 80vw;\n  }\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 500px;\n  @media (max-width: 767px) {\n    width: 80vw;\n  }\n"])));
var RootCentered = (0, styled_1.default)('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  position: relative;\n  max-width: 500px;\n  padding: 18px;\n  padding-right: ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.3;\n"], ["\n  ", ";\n  position: relative;\n  max-width: 500px;\n  padding: 18px;\n  padding-right: ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.3;\n"])), font_styles_1.default, function (props) { return (props.hideCloseButton ? '18px' : '40px'); }, function (props) { return props.backgroundColor; }, function (props) { return props.textColor; });
var Root = (0, styled_1.default)('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  position: relative;\n  padding: 8px;\n  padding-right: ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n  @media (min-width: 768px) {\n    display: flex;\n    align-items: center;\n  }\n"], ["\n  ", ";\n  position: relative;\n  padding: 8px;\n  padding-right: ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n  @media (min-width: 768px) {\n    display: flex;\n    align-items: center;\n  }\n"])), font_styles_1.default, function (props) { return (props.hideCloseButton ? '8px' : '40px'); }, function (props) { return props.backgroundColor; }, function (props) { return props.textColor; });
var Content = (0, styled_1.default)('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", ";\n  @media (min-width: 768px) {\n    flex: auto;\n    margin-bottom: ", ";\n  }\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n"], ["\n  margin-bottom: ", ";\n  @media (min-width: 768px) {\n    flex: auto;\n    margin-bottom: ", ";\n  }\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n"])), function (props) { return (props.asModal ? '20px' : '8px'); }, function (props) { return (props.asModal ? '20px' : '0'); });
var ActionsBlock = (0, styled_1.default)('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: #000;\n  button {\n    margin: 4px 0;\n    width: 100%;\n    @media (min-width: 768px) {\n      margin: 4px 8px;\n      width: 200px;\n    }\n  }\n"], ["\n  color: #000;\n  button {\n    margin: 4px 0;\n    width: 100%;\n    @media (min-width: 768px) {\n      margin: 4px 8px;\n      width: 200px;\n    }\n  }\n"])));
var P = (0, styled_1.default)('p')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n"], ["\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n"])));
var CloseButton = (0, styled_1.default)('button')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  right: 8px;\n  top: ", ";\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 8px;\n  top: ", ";\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n"])), function (props) { return (props.isTop ? '20px' : '50%'); });
var Banner = /** @class */ (function (_super) {
    __extends(Banner, _super);
    function Banner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Banner.prototype.render = function () {
        var _a = this.props, innerRef = _a.innerRef, onClose = _a.onClose, onChangePreferences = _a.onChangePreferences, content = _a.content, subContent = _a.subContent, actionsBlock = _a.actionsBlock, backgroundColor = _a.backgroundColor, textColor = _a.textColor, onAcceptAll = _a.onAcceptAll, onDenyAll = _a.onDenyAll, hideCloseButton = _a.hideCloseButton, asModal = _a.asModal;
        var RootContent = (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(Content, { asModal: asModal, id: "segmentio_fragmentBanner" },
                react_1.default.createElement(P, { id: "segmentio_pContent" }, content),
                react_1.default.createElement(P, { id: "segmentio_pSubContent" },
                    react_1.default.createElement("button", { type: "button", id: "segmentio_subContentBtn", onClick: onChangePreferences }, subContent))),
            typeof actionsBlock === 'function' &&
                actionsBlock({
                    acceptAll: onAcceptAll,
                    denyAll: onDenyAll,
                    changePreferences: onChangePreferences
                }),
            actionsBlock === true && (react_1.default.createElement(ActionsBlock, { id: "segmentio_actionBlock" },
                react_1.default.createElement(buttons_1.GreenButton, { id: "segmentio_allowBtn", type: "button", onClick: onAcceptAll }, "Allow all"),
                react_1.default.createElement(buttons_1.DefaultButton, { id: "segmentio_denyBtn", type: "button", onClick: onDenyAll }, "Deny all"))),
            !hideCloseButton && (react_1.default.createElement(CloseButton, { id: "segmentio_closeButton", type: "button", title: "Close", "aria-label": "Close", onClick: onClose, isTop: asModal }, "\u2715"))));
        if (asModal) {
            return (react_1.default.createElement(react_1.Fragment, null,
                react_1.default.createElement(Overlay, null),
                react_1.default.createElement(Centered, null,
                    react_1.default.createElement(RootCentered, { ref: innerRef, backgroundColor: backgroundColor, textColor: textColor, hideCloseButton: hideCloseButton }, RootContent))));
        }
        return (react_1.default.createElement(Root, { ref: innerRef, backgroundColor: backgroundColor, textColor: textColor, hideCloseButton: hideCloseButton }, RootContent));
    };
    Banner.displayName = 'Banner';
    return Banner;
}(react_1.PureComponent));
exports.default = Banner;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9iYW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNEO0FBQ3RELDJEQUFvQztBQUNwQyw4REFBc0M7QUFFdEMscUNBQXNEO0FBWXRELElBQU0sT0FBTyxHQUFHLElBQUEsZ0JBQU0sRUFBQyxLQUFLLENBQUMsbUxBQUEsZ0hBUTVCLElBQUEsQ0FBQTtBQUVELElBQU0sUUFBUSxHQUFHLElBQUEsZ0JBQU0sRUFBQyxLQUFLLENBQUMsc09BQUEsbUtBUzdCLElBQUEsQ0FBQTtBQUVELElBQU0sWUFBWSxHQUFHLElBQUEsZ0JBQU0sRUFBQyxLQUFLLENBQUMsMlFBQVcsTUFDekMsRUFBVSxvRkFJSyxFQUFrRCxtQkFDckQsRUFBOEIsY0FDbkMsRUFBd0IscUVBSWxDLEtBVkcscUJBQVUsRUFJSyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBekMsQ0FBeUMsRUFDckQsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsZUFBZSxFQUFyQixDQUFxQixFQUNuQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQWYsQ0FBZSxDQUlsQyxDQUFBO0FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBQSxnQkFBTSxFQUFDLEtBQUssQ0FBQyx1VUFBVyxNQUNqQyxFQUFVLDhEQUdLLEVBQWlELG1CQUNwRCxFQUE4QixjQUNuQyxFQUF3Qix1SkFRbEMsS0FiRyxxQkFBVSxFQUdLLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FB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