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
import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Dialog from './dialog';
import { DefaultButton, GreenButton } from './buttons';
var hideOnMobile = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (max-width: 600px) {\n    display: none;\n  }\n"], ["\n  @media (max-width: 600px) {\n    display: none;\n  }\n"])));
var TableScroll = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow-x: auto;\n  margin-top: 16px;\n"], ["\n  overflow-x: auto;\n  margin-top: 16px;\n"])));
var Table = styled('table')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-collapse: collapse;\n  font-size: 12px;\n"], ["\n  border-collapse: collapse;\n  font-size: 12px;\n"])));
var ColumnHeading = styled('th')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n"], ["\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n"])));
var RowHeading = styled('th')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: normal;\n  text-align: left;\n"], ["\n  font-weight: normal;\n  text-align: left;\n"])));
var Row = styled('tr')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n"], ["\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n"])));
var InputCell = styled('td')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n  td {\n    border: none;\n    vertical-align: middle;\n  }\n"], ["\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n  td {\n    border: none;\n    vertical-align: middle;\n  }\n"])));
var PreferenceDialog = /** @class */ (function (_super) {
    __extends(PreferenceDialog, _super);
    function PreferenceDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            var onChange = _this.props.onChange;
            onChange(e.target.name, e.target.value === 'true');
        };
        _this.handleSubmit = function (e) {
            var _a = _this.props, onSave = _a.onSave, preferences = _a.preferences, marketingAndAnalytics = _a.marketingAndAnalytics, advertising = _a.advertising, functional = _a.functional, customCategories = _a.customCategories;
            e.preventDefault();
            // Safe guard against browsers that don't prevent the
            // submission of invalid forms (Safari < 10.1)
            if (!customCategories &&
                (marketingAndAnalytics === null || advertising === null || functional === null)) {
                return;
            }
            // Safe guard against custom categories being null
            if (customCategories &&
                Object.keys(customCategories).some(function (category) { return preferences[category] === null; })) {
                return;
            }
            onSave();
        };
        return _this;
    }
    PreferenceDialog.prototype.render = function () {
        var _this = this;
        var _a = this.props, innerRef = _a.innerRef, onCancel = _a.onCancel, marketingDestinations = _a.marketingDestinations, advertisingDestinations = _a.advertisingDestinations, functionalDestinations = _a.functionalDestinations, marketingAndAnalytics = _a.marketingAndAnalytics, advertising = _a.advertising, functional = _a.functional, customCategories = _a.customCategories, destinations = _a.destinations, title = _a.title, content = _a.content, preferences = _a.preferences, preferencesDialogTemplate = _a.preferencesDialogTemplate;
        var _b = preferencesDialogTemplate, headings = _b.headings, checkboxes = _b.checkboxes, actionButtons = _b.actionButtons;
        var functionalInfo = preferencesDialogTemplate === null || preferencesDialogTemplate === void 0 ? void 0 : preferencesDialogTemplate.categories.find(function (c) { return c.key === 'functional'; });
        var marketingInfo = preferencesDialogTemplate === null || preferencesDialogTemplate === void 0 ? void 0 : preferencesDialogTemplate.categories.find(function (c) { return c.key === 'marketing'; });
        var advertisingInfo = preferencesDialogTemplate === null || preferencesDialogTemplate === void 0 ? void 0 : preferencesDialogTemplate.categories.find(function (c) { return c.key === 'advertising'; });
        var essentialInfo = preferencesDialogTemplate === null || preferencesDialogTemplate === void 0 ? void 0 : preferencesDialogTemplate.categories.find(function (c) { return c.key === 'essential'; });
        var buttons = (React.createElement("div", null,
            React.createElement(DefaultButton, { id: "segmentio_segmentio_prefBtnCancel", type: "button", onClick: onCancel }, actionButtons.cancelValue),
            React.createElement(GreenButton, { id: "segmentio_prefBtnSubmit", type: "submit" }, actionButtons.saveValue)));
        return (React.createElement(Dialog, { innerRef: innerRef, title: title, buttons: buttons, onCancel: onCancel, onSubmit: this.handleSubmit },
            content,
            React.createElement(TableScroll, { id: "segmentio_prefTableScroll" },
                React.createElement(Table, { id: "segmentio_prefTable" },
                    React.createElement("thead", { id: "segmentio_prefThead" },
                        React.createElement(Row, null,
                            React.createElement(ColumnHeading, { scope: "col" }, headings.allowValue),
                            React.createElement(ColumnHeading, { scope: "col" }, headings.categoryValue),
                            React.createElement(ColumnHeading, { scope: "col" }, headings.purposeValue),
                            React.createElement(ColumnHeading, { scope: "col", css: hideOnMobile }, headings.toolsValue))),
                    React.createElement("tbody", { id: "segmentio_prefTbody" },
                        !customCategories && (React.createElement(React.Fragment, null,
                            React.createElement(Row, null,
                                React.createElement(InputCell, null,
                                    React.createElement("label", null,
                                        React.createElement("input", { type: "radio", name: "functional", value: "true", checked: functional === true, onChange: this.handleChange, "aria-label": "Allow functional tracking", required: true }),
                                        ' ',
                                        checkboxes.yesValue),
                                    React.createElement("label", null,
                                        React.createElement("input", { type: "radio", name: "functional", value: "false", checked: functional === false, onChange: this.handleChange, "aria-label": "Disallow functional tracking", required: true }),
                                        ' ',
                                        checkboxes.noValue)),
                                React.createElement(RowHeading, { scope: "row" }, functionalInfo === null || functionalInfo === void 0 ? void 0 : functionalInfo.name),
                                React.createElement("td", null,
                                    React.createElement("p", null, functionalInfo === null || functionalInfo === void 0 ? void 0 : functionalInfo.description),
                                    React.createElement("p", { css: hideOnMobile }, functionalInfo === null || functionalInfo === void 0 ? void 0 : functionalInfo.example)),
                                React.createElement("td", { css: hideOnMobile }, functionalDestinations.map(function (d) { return d.name; }).join(', '))),
                            React.createElement(Row, null,
                                React.createElement(InputCell, null,
                                    React.createElement("label", null,
                                        React.createElement("input", { type: "radio", name: "marketingAndAnalytics", value: "true", checked: marketingAndAnalytics === true, onChange: this.handleChange, "aria-label": "Allow marketing and analytics tracking", required: true }),
                                        ' ',
                                        checkboxes.yesValue),
                                    React.createElement("label", null,
                                        React.createElement("input", { type: "radio", name: "marketingAndAnalytics", value: "false", checked: marketingAndAnalytics === false, onChange: this.handleChange, "aria-label": "Disallow marketing and analytics tracking", required: true }),
                                        ' ',
                                        checkboxes.noValue)),
                                React.createElement(RowHeading, { scope: "row" }, marketingInfo === null || marketingInfo === void 0 ? void 0 : marketingInfo.name),
                                React.createElement("td", null,
                                    React.createElement("p", null, marketingInfo === null || marketingInfo === void 0 ? void 0 : marketingInfo.description),
                                    React.createElement("p", { css: hideOnMobile }, marketingInfo === null || marketingInfo === void 0 ? void 0 : marketingInfo.example)),
                                React.createElement("td", { css: hideOnMobile }, marketingDestinations.map(function (d) { return d.name; }).join(', '))),
                            React.createElement(Row, null,
                                React.createElement(InputCell, null,
                                    React.createElement("label", null,
                                        React.createElement("input", { type: "radio", name: "advertising", value: "true", checked: advertising === true, onChange: this.handleChange, "aria-label": "Allow advertising tracking", required: true }),
                                        ' ',
                                        checkboxes.yesValue),
                                    React.createElement("label", null,
                                        React.createElement("input", { type: "radio", name: "advertising", value: "false", checked: advertising === false, onChange: this.handleChange, "aria-label": "Disallow advertising tracking", required: true }),
                                        ' ',
                                        checkboxes.noValue)),
                                React.createElement(RowHeading, { scope: "row" }, advertisingInfo === null || advertisingInfo === void 0 ? void 0 : advertisingInfo.name),
                                React.createElement("td", null,
                                    React.createElement("p", null, advertisingInfo === null || advertisingInfo === void 0 ? void 0 : advertisingInfo.description),
                                    React.createElement("p", { css: hideOnMobile }, advertisingInfo === null || advertisingInfo === void 0 ? void 0 : advertisingInfo.example)),
                                React.createElement("td", { css: hideOnMobile }, advertisingDestinations.map(function (d) { return d.name; }).join(', '))),
                            React.createElement(Row, null,
                                React.createElement("td", null, "N/A"),
                                React.createElement(RowHeading, { scope: "row" }, essentialInfo === null || essentialInfo === void 0 ? void 0 : essentialInfo.name),
                                React.createElement("td", null,
                                    React.createElement("p", null, essentialInfo === null || essentialInfo === void 0 ? void 0 : essentialInfo.description),
                                    React.createElement("p", null, essentialInfo === null || essentialInfo === void 0 ? void 0 : essentialInfo.example)),
                                React.createElement("td", { css: hideOnMobile })))),
                        customCategories &&
                            Object.entries(customCategories).map(function (_a) {
                                var categoryName = _a[0], _b = _a[1], integrations = _b.integrations, purpose = _b.purpose;
                                return (React.createElement(Row, { key: categoryName },
                                    React.createElement(InputCell, null, preferences[categoryName] === 'N/A' ? (React.createElement("td", null, "N/A")) : (React.createElement(React.Fragment, null,
                                        React.createElement("label", null,
                                            React.createElement("input", { type: "radio", name: categoryName, value: "true", checked: preferences[categoryName] === true, onChange: _this.handleChange, "aria-label": "Allow \"".concat(categoryName, "\" tracking"), required: true }),
                                            ' ',
                                            checkboxes.yesValue),
                                        React.createElement("label", null,
                                            React.createElement("input", { type: "radio", name: categoryName, value: "false", checked: preferences[categoryName] === false, onChange: _this.handleChange, "aria-label": "Disallow \"".concat(categoryName, "\" tracking"), required: true }),
                                            ' ',
                                            checkboxes.noValue)))),
                                    React.createElement(RowHeading, { scope: "row" }, categoryName),
                                    React.createElement("td", null,
                                        React.createElement("p", null, purpose)),
                                    React.createElement("td", { css: hideOnMobile }, destinations
                                        .filter(function (d) { return integrations.includes(d.id); })
                                        .map(function (d) { return d.name; })
                                        .join(', '))));
                            }))))));
    };
    PreferenceDialog.displayName = 'PreferenceDialog';
    PreferenceDialog.defaultProps = {
        marketingAndAnalytics: null,
        advertising: null,
        functional: null
    };
    return PreferenceDialog;
}(PureComponent));
export default PreferenceDialog;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDNUMsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUE7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQ3BDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQTtBQUM3QixPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQVF0RCxJQUFNLFlBQVksR0FBRyxHQUFHLCtIQUFBLDREQUl2QixJQUFBLENBQUE7QUFFRCxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGlIQUFBLDhDQUdoQyxJQUFBLENBQUE7QUFFRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHlIQUFBLHNEQUc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtMQUFBLCtHQU1qQyxJQUFBLENBQUE7QUFFRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG9IQUFBLGlEQUc5QixJQUFBLENBQUE7QUFFRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtPQUFBLCtKQVV2QixJQUFBLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHlRQUFBLHNNQWE3QixJQUFBLENBQUE7QUFxQkQ7SUFBOEMsb0NBQXdDO0lBQXRGO1FBQUEscUVBeVJDO1FBakNDLGtCQUFZLEdBQUcsVUFBQSxDQUFDO1lBQ04sSUFBQSxRQUFRLEdBQUssS0FBSSxDQUFDLEtBQUssU0FB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