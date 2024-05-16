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
import React, { Fragment, PureComponent } from 'react';
import styled from '@emotion/styled';
import fontStyles from './font-styles';
import { DefaultButton, GreenButton } from './buttons';
var Overlay = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  opacity: 0.8;\n"], ["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  opacity: 0.8;\n"])));
var Centered = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 500px;\n  @media (max-width: 767px) {\n    width: 80vw;\n  }\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 500px;\n  @media (max-width: 767px) {\n    width: 80vw;\n  }\n"])));
var RootCentered = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  position: relative;\n  max-width: 500px;\n  padding: 18px;\n  padding-right: ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.3;\n"], ["\n  ", ";\n  position: relative;\n  max-width: 500px;\n  padding: 18px;\n  padding-right: ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.3;\n"])), fontStyles, function (props) { return (props.hideCloseButton ? '18px' : '40px'); }, function (props) { return props.backgroundColor; }, function (props) { return props.textColor; });
var Root = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  position: relative;\n  padding: 8px;\n  padding-right: ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n  @media (min-width: 768px) {\n    display: flex;\n    align-items: center;\n  }\n"], ["\n  ", ";\n  position: relative;\n  padding: 8px;\n  padding-right: ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n  @media (min-width: 768px) {\n    display: flex;\n    align-items: center;\n  }\n"])), fontStyles, function (props) { return (props.hideCloseButton ? '8px' : '40px'); }, function (props) { return props.backgroundColor; }, function (props) { return props.textColor; });
var Content = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", ";\n  @media (min-width: 768px) {\n    flex: auto;\n    margin-bottom: ", ";\n  }\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n"], ["\n  margin-bottom: ", ";\n  @media (min-width: 768px) {\n    flex: auto;\n    margin-bottom: ", ";\n  }\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n"])), function (props) { return (props.asModal ? '20px' : '8px'); }, function (props) { return (props.asModal ? '20px' : '0'); });
var ActionsBlock = styled('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: #000;\n  button {\n    margin: 4px 0;\n    width: 100%;\n    @media (min-width: 768px) {\n      margin: 4px 8px;\n      width: 200px;\n    }\n  }\n"], ["\n  color: #000;\n  button {\n    margin: 4px 0;\n    width: 100%;\n    @media (min-width: 768px) {\n      margin: 4px 8px;\n      width: 200px;\n    }\n  }\n"])));
var P = styled('p')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n"], ["\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n"])));
var CloseButton = styled('button')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  right: 8px;\n  top: ", ";\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 8px;\n  top: ", ";\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n"])), function (props) { return (props.isTop ? '20px' : '50%'); });
var Banner = /** @class */ (function (_super) {
    __extends(Banner, _super);
    function Banner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Banner.prototype.render = function () {
        var _a = this.props, innerRef = _a.innerRef, onClose = _a.onClose, onChangePreferences = _a.onChangePreferences, content = _a.content, subContent = _a.subContent, actionsBlock = _a.actionsBlock, backgroundColor = _a.backgroundColor, textColor = _a.textColor, onAcceptAll = _a.onAcceptAll, onDenyAll = _a.onDenyAll, hideCloseButton = _a.hideCloseButton, asModal = _a.asModal;
        var RootContent = (React.createElement(Fragment, null,
            React.createElement(Content, { asModal: asModal, id: "segmentio_fragmentBanner" },
                React.createElement(P, { id: "segmentio_pContent" }, content),
                React.createElement(P, { id: "segmentio_pSubContent" },
                    React.createElement("button", { type: "button", id: "segmentio_subContentBtn", onClick: onChangePreferences }, subContent))),
            typeof actionsBlock === 'function' &&
                actionsBlock({
                    acceptAll: onAcceptAll,
                    denyAll: onDenyAll,
                    changePreferences: onChangePreferences
                }),
            actionsBlock === true && (React.createElement(ActionsBlock, { id: "segmentio_actionBlock" },
                React.createElement(GreenButton, { id: "segmentio_allowBtn", type: "button", onClick: onAcceptAll }, "Allow all"),
                React.createElement(DefaultButton, { id: "segmentio_denyBtn", type: "button", onClick: onDenyAll }, "Deny all"))),
            !hideCloseButton && (React.createElement(CloseButton, { id: "segmentio_closeButton", type: "button", title: "Close", "aria-label": "Close", onClick: onClose, isTop: asModal }, "\u2715"))));
        if (asModal) {
            return (React.createElement(Fragment, null,
                React.createElement(Overlay, null),
                React.createElement(Centered, null,
                    React.createElement(RootCentered, { ref: innerRef, backgroundColor: backgroundColor, textColor: textColor, hideCloseButton: hideCloseButton }, RootContent))));
        }
        return (React.createElement(Root, { ref: innerRef, backgroundColor: backgroundColor, textColor: textColor, hideCloseButton: hideCloseButton }, RootContent));
    };
    Banner.displayName = 'Banner';
    return Banner;
}(PureComponent));
export default Banner;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9iYW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDdEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUE7QUFDcEMsT0FBTyxVQUFVLE1BQU0sZUFBZSxDQUFBO0FBRXRDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBWXRELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUxBQUEsZ0hBUTVCLElBQUEsQ0FBQTtBQUVELElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsc09BQUEsbUtBUzdCLElBQUEsQ0FBQTtBQUVELElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsMlFBQVcsTUFDekMsRUFBVSxvRkFJSyxFQUFrRCxtQkFDckQsRUFBOEIsY0FDbkMsRUFBd0IscUVBSWxDLEtBVkcsVUFBVSxFQUlLLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUF6QyxDQUF5QyxFQUNyRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLEVBQ25DLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBZixDQUFlLENBSWxDLENBQUE7QUFFRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLHVVQUFXLE1BQ2pDLEVBQVUsOERBR0ssRUFBaUQsbUJBQ3BELEVBQThCLGNBQ25DLEVBQXdCLHVKQVFsQyxLQWJHLFVBQVUsRUFHSyxVQUFBLEtBQUssSUFB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