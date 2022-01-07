"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactAppComponent = void 0;
var core_1 = require("@angular/core");
// import {OrderListModule} from 'primeng/orderlist';
// import {MatList}from '@angular/material'
var ContactAppComponent = /** @class */ (function () {
    function ContactAppComponent(contactService) {
        this.contactService = contactService;
        this.isContactAdding = false;
        this.filterBy = '';
    }
    ContactAppComponent.prototype.ngOnInit = function () {
        this.contactService.loadContacts();
        this.contacts$ = this.contactService.contacts$;
        // console.log('contacts: ', this.contacts$);
    };
    ContactAppComponent.prototype.filterContacts = function () {
        console.log('this.filterBy', this.filterBy);
        var filter = { term: this.filterBy };
        this.contactService.loadContacts(filter);
    };
    ContactAppComponent.prototype.onCloseModal = function (event) {
        this.isContactAdding = false;
    };
    ContactAppComponent = __decorate([
        core_1.Component({
            selector: 'contact-app',
            templateUrl: './contact-app.component.html',
            styleUrls: ['./contact-app.component.scss']
        })
    ], ContactAppComponent);
    return ContactAppComponent;
}());
exports.ContactAppComponent = ContactAppComponent;
