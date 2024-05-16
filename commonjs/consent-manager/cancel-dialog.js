"use strict";
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
var dialog_1 = __importDefault(require("./dialog"));
var buttons_1 = require("./buttons");
var CancelDialog = /** @class */ (function (_super) {
    __extends(CancelDialog, _super);
    function CancelDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function (e) {
            var onConfirm = _this.props.onConfirm;
            e.preventDefault();
            onConfirm();
        };
        _this.handleEsc = function (e) {
            var onConfirm = _this.props.onConfirm;
            // Esc key
            if (e.keyCode === 27) {
                onConfirm();
            }
        };
        return _this;
    }
    CancelDialog.prototype.render = function () {
        var _a = this.props, innerRef = _a.innerRef, onBack = _a.onBack, title = _a.title, content = _a.content, preferencesDialogTemplate = _a.preferencesDialogTemplate;
        var buttons = (react_1.default.createElement("div", null,
            react_1.default.createElement(buttons_1.DefaultButton, { id: "segmentio_backDialogBtn", type: "button", onClick: onBack }, preferencesDialogTemplate === null || preferencesDialogTemplate === void 0 ? void 0 : preferencesDialogTemplate.cancelDialogButtons.backValue),
            react_1.default.createElement(buttons_1.RedButton, { id: "segmentio_cancelDialogBtn", type: "submit" }, preferencesDialogTemplate === null || preferencesDialogTemplate === void 0 ? void 0 : preferencesDialogTemplate.cancelDialogButtons.cancelValue)));
        return (react_1.default.createElement(dialog_1.default, { innerRef: innerRef, title: title, buttons: buttons, onSubmit: this.handleSubmit, width: "500px" }, content));
    };
    CancelDialog.prototype.componentDidMount = function () {
        document.body.addEventListener('keydown', this.handleEsc, false);
    };
    CancelDialog.prototype.componentWillUnmount = function () {
        document.body.removeEventListener('keydown', this.handleEsc, false);
    };
    CancelDialog.displayName = 'CancelDialog';
    return CancelDialog;
}(react_1.PureComponent));
exports.default = CancelDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLWRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvY2FuY2VsLWRpYWxvZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1QyxvREFBNkI7QUFDN0IscUNBQW9EO0FBWXBEO0lBQTBDLGdDQUFvQjtJQUE5RDtRQUFBLHFFQXFEQztRQWZDLGtCQUFZLEdBQUcsVUFBQSxDQUFDO1lBQ04sSUFBQSxTQUFTLEdBQUssS0FBSSxDQUFDLEtBQUssVUFBZixDQUFlO1lBRWhDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUNsQixTQUFTLEVBQUUsQ0FBQTtRQUNiLENBQUMsQ0FBQTtRQUVELGVBQVMsR0FBRyxVQUFDLENBQWdCO1lBQ25CLElBQUEsU0FBUyxHQUFLLEtBQUksQ0FBQyxLQUFLLFVBQWYsQ0FBZTtZQUVoQyxVQUFVO1lBQ1YsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDcEIsU0FBUyxFQUFFLENBQUE7YUFDWjtRQUNILENBQUMsQ0FBQTs7SUFDSCxDQUFDO0lBbERDLDZCQUFNLEdBQU47UUFDUSxJQUFBLEtBQWtFLElBQUksQ0FBQyxLQUFLLEVBQTFFLFFBQVEsY0FBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLHlCQUF5QiwrQkFBZSxDQUFBO1FBRWxGLElBQU0sT0FBTyxHQUFHLENBQ2Q7WUFDRSw4QkFBQyx1QkFBYSxJQUFDLEVBQUUsRUFBQyx5QkFBeUIsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxNQUFNLElBQ3RFLHlCQUF5QixhQUF6Qix5QkFBeUIsdUJBQXpCLHlCQUF5QixDQUFFLG1CQUFtQixDQUFFLFNBQVMsQ0FDNUM7WUFDaEIsOEJBQUMsbUJBQVMsSUFBQyxFQUFFLEVBQUMsMkJBQTJCLEVBQUMsSUFBSSxFQUFDLFFBQVEsSUFDcEQseUJBQXlCLGFBQXpCLHlCQUF5Qix1QkFBekIseUJBQXlCLENBQUUsbUJBQW1CLENBQUUsV0FBVyxDQUNsRCxDQUNSLENBQ1AsQ0FBQTtRQUVELE9BQU8sQ0FDTCw4QkFBQyxnQkFBTSxJQUNMLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLE9BQU8sRUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQzNCLEtBQUssRUFBQyxPQUFPLElBRVosT0FBTyxDQUNELENBQ1YsQ0FBQTtJQUNILENBQUM7SUFFRCx3Q0FBaUIsR0FBakI7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCwyQ0FBb0IsR0FBcEI7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFuQ00sd0JBQVcsR0FBRyxjQUFjLENBQUE7SUFvRHJDLG1CQUFDO0NBQUEsQUFyREQsQ0FBMEMscUJBQWEsR0FxRHREO2tCQXJEb0IsWUFBWSJ9