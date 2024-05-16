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
import Dialog from './dialog';
import { DefaultButton, RedButton } from './buttons';
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
        var buttons = (React.createElement("div", null,
            React.createElement(DefaultButton, { id: "segmentio_backDialogBtn", type: "button", onClick: onBack }, preferencesDialogTemplate === null || preferencesDialogTemplate === void 0 ? void 0 : preferencesDialogTemplate.cancelDialogButtons.backValue),
            React.createElement(RedButton, { id: "segmentio_cancelDialogBtn", type: "submit" }, preferencesDialogTemplate === null || preferencesDialogTemplate === void 0 ? void 0 : preferencesDialogTemplate.cancelDialogButtons.cancelValue)));
        return (React.createElement(Dialog, { innerRef: innerRef, title: title, buttons: buttons, onSubmit: this.handleSubmit, width: "500px" }, content));
    };
    CancelDialog.prototype.componentDidMount = function () {
        document.body.addEventListener('keydown', this.handleEsc, false);
    };
    CancelDialog.prototype.componentWillUnmount = function () {
        document.body.removeEventListener('keydown', this.handleEsc, false);
    };
    CancelDialog.displayName = 'CancelDialog';
    return CancelDialog;
}(PureComponent));
export default CancelDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLWRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvY2FuY2VsLWRpYWxvZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDNUMsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFBO0FBQzdCLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBWXBEO0lBQTBDLGdDQUFvQjtJQUE5RDtRQUFBLHFFQXFEQztRQWZDLGtCQUFZLEdBQUcsVUFBQSxDQUFDO1lBQ04sSUFBQSxTQUFTLEdBQUssS0FBSSxDQUFDLEtBQUssVUFBZixDQUFlO1lBRWhDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUNsQixTQUFTLEVBQUUsQ0FBQTtRQUNiLENBQUMsQ0FBQTtRQUVELGVBQVMsR0FBRyxVQUFDLENBQWdCO1lBQ25CLElBQUEsU0FBUyxHQUFLLEtBQUksQ0FBQyxLQUFLLFVBQWYsQ0FBZTtZQUVoQyxVQUFVO1lBQ1YsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDcEIsU0FBUyxFQUFFLENBQUE7YUFDWjtRQUNILENBQUMsQ0FBQTs7SUFDSCxDQUFDO0lBbERDLDZCQUFNLEdBQU47UUFDUSxJQUFBLEtBQWtFLElBQUksQ0FBQyxLQUFLLEVBQTFFLFFBQVEsY0FBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLHlCQUF5QiwrQkFBZSxDQUFBO1FBRWxGLElBQU0sT0FBTyxHQUFHLENBQ2Q7WUFDRSxvQkFBQyxhQUFhLElBQUMsRUFBRSxFQUFDLHlCQUF5QixFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLE1BQU0sSUFDdEUseUJBQXlCLGFBQXpCLHlCQUF5Qix1QkFBekIseUJBQXlCLENBQUUsbUJBQW1CLENBQUUsU0FBUyxDQUM1QztZQUNoQixvQkFBQyxTQUFTLElBQUMsRUFBRSxFQUFDLDJCQUEyQixFQUFDLElBQUksRUFBQyxRQUFRLElBQ3BELHlCQUF5QixhQUF6Qix5QkFBeUIsdUJBQXpCLHlCQUF5QixDQUFFLG1CQUFtQixDQUFFLFdBQVcsQ0FDbEQsQ0FDUixDQUNQLENBQUE7UUFFRCxPQUFPLENBQ0wsb0JBQUMsTUFBTSxJQUNMLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLE9BQU8sRUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQzNCLEtBQUssRUFBQyxPQUFPLElBRVosT0FBTyxDQUNELENBQ1YsQ0FBQTtJQUNILENBQUM7SUFFRCx3Q0FBaUIsR0FBakI7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCwyQ0FBb0IsR0FBcEI7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFuQ00sd0JBQVcsR0FBRyxjQUFjLENBQUE7SUFvRHJDLG1CQUFDO0NBQUEsQUFyREQsQ0FBMEMsYUFBYSxHQXFEdEQ7ZUFyRG9CLFlBQVkifQ==