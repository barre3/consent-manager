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
var react_2 = require("@emotion/react");
var dialog_1 = __importDefault(require("./dialog"));
var buttons_1 = require("./buttons");
var hideOnMobile = (0, react_2.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (max-width: 600px) {\n    display: none;\n  }\n"], ["\n  @media (max-width: 600px) {\n    display: none;\n  }\n"])));
var TableScroll = (0, styled_1.default)('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow-x: auto;\n  margin-top: 16px;\n"], ["\n  overflow-x: auto;\n  margin-top: 16px;\n"])));
var Table = (0, styled_1.default)('table')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-collapse: collapse;\n  font-size: 12px;\n"], ["\n  border-collapse: collapse;\n  font-size: 12px;\n"])));
var ColumnHeading = (0, styled_1.default)('th')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n"], ["\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n"])));
var RowHeading = (0, styled_1.default)('th')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: normal;\n  text-align: left;\n"], ["\n  font-weight: normal;\n  text-align: left;\n"])));
var Row = (0, styled_1.default)('tr')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n"], ["\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n"])));
var InputCell = (0, styled_1.default)('td')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n  td {\n    border: none;\n    vertical-align: middle;\n  }\n"], ["\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n  td {\n    border: none;\n    vertical-align: middle;\n  }\n"])));
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
        var buttons = (react_1.default.createElement("div", null,
            react_1.default.createElement(buttons_1.DefaultButton, { id: "segmentio_segmentio_prefBtnCancel", type: "button", onClick: onCancel }, actionButtons.cancelValue),
            react_1.default.createElement(buttons_1.GreenButton, { id: "segmentio_prefBtnSubmit", type: "submit" }, actionButtons.saveValue)));
        return (react_1.default.createElement(dialog_1.default, { innerRef: innerRef, title: title, buttons: buttons, onCancel: onCancel, onSubmit: this.handleSubmit },
            content,
            react_1.default.createElement(TableScroll, { id: "segmentio_prefTableScroll" },
                react_1.default.createElement(Table, { id: "segmentio_prefTable" },
                    react_1.default.createElement("thead", { id: "segmentio_prefThead" },
                        react_1.default.createElement(Row, null,
                            react_1.default.createElement(ColumnHeading, { scope: "col" }, headings.allowValue),
                            react_1.default.createElement(ColumnHeading, { scope: "col" }, headings.categoryValue),
                            react_1.default.createElement(ColumnHeading, { scope: "col" }, headings.purposeValue),
                            react_1.default.createElement(ColumnHeading, { scope: "col", css: hideOnMobile }, headings.toolsValue))),
                    react_1.default.createElement("tbody", { id: "segmentio_prefTbody" },
                        !customCategories && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(Row, null,
                                react_1.default.createElement(InputCell, null,
                                    react_1.default.createElement("label", null,
                                        react_1.default.createElement("input", { type: "radio", name: "functional", value: "true", checked: functional === true, onChange: this.handleChange, "aria-label": "Allow functional tracking", required: true }),
                                        ' ',
                                        checkboxes.yesValue),
                                    react_1.default.createElement("label", null,
                                        react_1.default.createElement("input", { type: "radio", name: "functional", value: "false", checked: functional === false, onChange: this.handleChange, "aria-label": "Disallow functional tracking", required: true }),
                                        ' ',
                                        checkboxes.noValue)),
                                react_1.default.createElement(RowHeading, { scope: "row" }, functionalInfo === null || functionalInfo === void 0 ? void 0 : functionalInfo.name),
                                react_1.default.createElement("td", null,
                                    react_1.default.createElement("p", null, functionalInfo === null || functionalInfo === void 0 ? void 0 : functionalInfo.description),
                                    react_1.default.createElement("p", { css: hideOnMobile }, functionalInfo === null || functionalInfo === void 0 ? void 0 : functionalInfo.example)),
                                react_1.default.createElement("td", { css: hideOnMobile }, functionalDestinations.map(function (d) { return d.name; }).join(', '))),
                            react_1.default.createElement(Row, null,
                                react_1.default.createElement(InputCell, null,
                                    react_1.default.createElement("label", null,
                                        react_1.default.createElement("input", { type: "radio", name: "marketingAndAnalytics", value: "true", checked: marketingAndAnalytics === true, onChange: this.handleChange, "aria-label": "Allow marketing and analytics tracking", required: true }),
                                        ' ',
                                        checkboxes.yesValue),
                                    react_1.default.createElement("label", null,
                                        react_1.default.createElement("input", { type: "radio", name: "marketingAndAnalytics", value: "false", checked: marketingAndAnalytics === false, onChange: this.handleChange, "aria-label": "Disallow marketing and analytics tracking", required: true }),
                                        ' ',
                                        checkboxes.noValue)),
                                react_1.default.createElement(RowHeading, { scope: "row" }, marketingInfo === null || marketingInfo === void 0 ? void 0 : marketingInfo.name),
                                react_1.default.createElement("td", null,
                                    react_1.default.createElement("p", null, marketingInfo === null || marketingInfo === void 0 ? void 0 : marketingInfo.description),
                                    react_1.default.createElement("p", { css: hideOnMobile }, marketingInfo === null || marketingInfo === void 0 ? void 0 : marketingInfo.example)),
                                react_1.default.createElement("td", { css: hideOnMobile }, marketingDestinations.map(function (d) { return d.name; }).join(', '))),
                            react_1.default.createElement(Row, null,
                                react_1.default.createElement(InputCell, null,
                                    react_1.default.createElement("label", null,
                                        react_1.default.createElement("input", { type: "radio", name: "advertising", value: "true", checked: advertising === true, onChange: this.handleChange, "aria-label": "Allow advertising tracking", required: true }),
                                        ' ',
                                        checkboxes.yesValue),
                                    react_1.default.createElement("label", null,
                                        react_1.default.createElement("input", { type: "radio", name: "advertising", value: "false", checked: advertising === false, onChange: this.handleChange, "aria-label": "Disallow advertising tracking", required: true }),
                                        ' ',
                                        checkboxes.noValue)),
                                react_1.default.createElement(RowHeading, { scope: "row" }, advertisingInfo === null || advertisingInfo === void 0 ? void 0 : advertisingInfo.name),
                                react_1.default.createElement("td", null,
                                    react_1.default.createElement("p", null, advertisingInfo === null || advertisingInfo === void 0 ? void 0 : advertisingInfo.description),
                                    react_1.default.createElement("p", { css: hideOnMobile }, advertisingInfo === null || advertisingInfo === void 0 ? void 0 : advertisingInfo.example)),
                                react_1.default.createElement("td", { css: hideOnMobile }, advertisingDestinations.map(function (d) { return d.name; }).join(', '))),
                            react_1.default.createElement(Row, null,
                                react_1.default.createElement("td", null, "N/A"),
                                react_1.default.createElement(RowHeading, { scope: "row" }, essentialInfo === null || essentialInfo === void 0 ? void 0 : essentialInfo.name),
                                react_1.default.createElement("td", null,
                                    react_1.default.createElement("p", null, essentialInfo === null || essentialInfo === void 0 ? void 0 : essentialInfo.description),
                                    react_1.default.createElement("p", null, essentialInfo === null || essentialInfo === void 0 ? void 0 : essentialInfo.example)),
                                react_1.default.createElement("td", { css: hideOnMobile })))),
                        customCategories &&
                            Object.entries(customCategories).map(function (_a) {
                                var categoryName = _a[0], _b = _a[1], integrations = _b.integrations, purpose = _b.purpose;
                                return (react_1.default.createElement(Row, { key: categoryName },
                                    react_1.default.createElement(InputCell, null, preferences[categoryName] === 'N/A' ? (react_1.default.createElement("td", null, "N/A")) : (react_1.default.createElement(react_1.default.Fragment, null,
                                        react_1.default.createElement("label", null,
                                            react_1.default.createElement("input", { type: "radio", name: categoryName, value: "true", checked: preferences[categoryName] === true, onChange: _this.handleChange, "aria-label": "Allow \"".concat(categoryName, "\" tracking"), required: true }),
                                            ' ',
                                            checkboxes.yesValue),
                                        react_1.default.createElement("label", null,
                                            react_1.default.createElement("input", { type: "radio", name: categoryName, value: "false", checked: preferences[categoryName] === false, onChange: _this.handleChange, "aria-label": "Disallow \"".concat(categoryName, "\" tracking"), required: true }),
                                            ' ',
                                            checkboxes.noValue)))),
                                    react_1.default.createElement(RowHeading, { scope: "row" }, categoryName),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement("p", null, purpose)),
                                    react_1.default.createElement("td", { css: hideOnMobile }, destinations
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
}(react_1.PureComponent));
exports.default = PreferenceDialog;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1QywyREFBb0M7QUFDcEMsd0NBQW9DO0FBQ3BDLG9EQUE2QjtBQUM3QixxQ0FBc0Q7QUFRdEQsSUFBTSxZQUFZLE9BQUcsV0FBRyxnSUFBQSw0REFJdkIsSUFBQSxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsSUFBQSxnQkFBTSxFQUFDLEtBQUssQ0FBQyxpSEFBQSw4Q0FHaEMsSUFBQSxDQUFBO0FBRUQsSUFBTSxLQUFLLEdBQUcsSUFBQSxnQkFBTSxFQUFDLE9BQU8sQ0FBQyx5SEFBQSxzREFHNUIsSUFBQSxDQUFBO0FBRUQsSUFBTSxhQUFhLEdBQUcsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxrTEFBQSwrR0FNakMsSUFBQSxDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQUcsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxvSEFBQSxpREFHOUIsSUFBQSxDQUFBO0FBRUQsSUFBTSxHQUFHLEdBQUcsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxrT0FBQSwrSkFVdkIsSUFBQSxDQUFBO0FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyx5UUFBQSxzTUFhN0IsSUFBQSxDQUFBO0FBcUJEO0lBQThDLG9DQUF3QztJQUF0RjtRQUFBLHFFQXlSQztRQWpDQyxrQkFBWSxHQUFHLFVBQUEsQ0FBQztZQUNOLElBQUEsUUFBUSxHQUFLLEtBQUksQ0FBQyxLQUFLLFNBQWYsQ0FBZTtZQUMvQixRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtB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