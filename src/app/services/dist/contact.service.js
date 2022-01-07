"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
// import { BehaviorSubject } from 'rxjs';
// import { of } from 'rxjs/observable/of'
var rxjs_2 = require("rxjs");
var contact_model_1 = require("../models/contact.model");
var rxjs_3 = require("rxjs");
var CONTACTS = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824"
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888"
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495"
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312"
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258"
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082"
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678"
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663"
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851"
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166"
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295"
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550"
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181"
    },
    {
        "_id": "5a56640298ab77236845b82b",
        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376"
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557"
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629"
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529"
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291"
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812"
    }
];
var ContactService = /** @class */ (function () {
    function ContactService() {
        //mock the server
        this._contactsDb = CONTACTS;
        this._contacts$ = new rxjs_1.BehaviorSubject([]);
        this.contacts$ = this._contacts$.asObservable();
    }
    ContactService.prototype.loadContacts = function (filterBy) {
        if (filterBy === void 0) { filterBy = null; }
        var contacts = this._contactsDb;
        if (filterBy && filterBy.term) {
            contacts = this._filter(contacts, filterBy.term);
        }
        this._contacts$.next(this._sort(contacts));
    };
    // public loadContacts(filterBy = null): void {
    //   let contacts = this._contactsDb;
    //   if (filterBy && filterBy.term) {
    //     contacts = this._filter(contacts, filterBy.term)
    //   }
    //   this._contacts$.next(this._sort(contacts))
    // }
    ContactService.prototype.getContactById = function (id) {
        //mock the server work
        var contact = this._contactsDb.find(function (contact) { return contact._id === id; });
        //return an observable
        return contact ? rxjs_2.of(contact) : rxjs_3.throwError(function () { return "Contact id " + id + " not found!"; });
    };
    ContactService.prototype.deleteContact = function (id) {
        //mock the server work
        this._contactsDb = this._contactsDb.filter(function (contact) { return contact._id !== id; });
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._contactsDb);
    };
    ContactService.prototype.saveContact = function (contact) {
        return contact._id ? this._updateContact(contact) : this._addContact(contact);
    };
    ContactService.prototype.getEmptyContact = function () {
        return new contact_model_1.Contact();
    };
    ContactService.prototype._updateContact = function (contact) {
        //mock the server work
        this._contactsDb = this._contactsDb.map(function (c) { return contact._id === c._id ? contact : c; });
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._sort(this._contactsDb));
    };
    ContactService.prototype._addContact = function (contact) {
        //mock the server work
        console.log('adding', contact);
        var newContact = new contact_model_1.Contact(contact.name, contact.email, contact.phone);
        // newContact.setId();
        console.log('newContact', newContact);
        newContact.setId();
        this._contactsDb.push(newContact);
        console.log('newContact', newContact);
        this._contacts$.next(this._sort(this._contactsDb));
    };
    ContactService.prototype._sort = function (contacts) {
        return contacts.sort(function (a, b) {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    };
    ContactService.prototype._filter = function (contacts, term) {
        term = term.toLocaleLowerCase();
        return contacts.filter(function (contact) {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term);
        });
    };
    ContactService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
