"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactPreviewComponent = void 0;
var core_1 = require("@angular/core");
var ContactPreviewComponent = /** @class */ (function () {
    // @Input() isMove: boolean
    function ContactPreviewComponent() {
        this.isContactEdit = false;
        this.isMoveClick = false;
    }
    ContactPreviewComponent.prototype.ngOnInit = function () {
    };
    ContactPreviewComponent.prototype.onContactEdit = function () {
        this.isContactEdit = true;
    };
    ContactPreviewComponent.prototype.onMoveModal = function (event) {
        console.log('here');
        this.isContactEdit = false;
        this.isMoveClick = true;
        console.log(' this.isMoveClick', this.isMoveClick);
    };
    ContactPreviewComponent.prototype.onCloseModal = function (event) {
        // if(this.isMoveClick) return
        console.log(' this.isMoveClick', this.isMoveClick);
        console.log('is');
        this.isContactEdit = false;
        this.isMoveClick = false;
        console.log(' this.isMoveClick', this.isMoveClick);
    };
    __decorate([
        core_1.Input()
    ], ContactPreviewComponent.prototype, "contact");
    ContactPreviewComponent = __decorate([
        core_1.Component({
            selector: 'contact-preview',
            templateUrl: './contact-preview.component.html',
            styleUrls: ['./contact-preview.component.scss']
        })
    ], ContactPreviewComponent);
    return ContactPreviewComponent;
}());
exports.ContactPreviewComponent = ContactPreviewComponent;
