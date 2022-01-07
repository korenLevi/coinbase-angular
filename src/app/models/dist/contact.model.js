"use strict";
exports.__esModule = true;
exports.Contact = void 0;
var Contact = /** @class */ (function () {
    function Contact(name, email, phone, _id) {
        if (name === void 0) { name = ''; }
        if (email === void 0) { email = ''; }
        if (phone === void 0) { phone = ''; }
        this.name = name;
        this.email = email;
        this.phone = phone;
        this._id = _id;
    }
    Contact.prototype.setId = function () {
        // Implement your own set Id
        // this._id = 'hkjgbjhb '
        this._id = this.makeId();
        // this._id = this.makeId()
    };
    Contact.prototype.makeId = function (length) {
        if (length === void 0) { length = 5; }
        var txt = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
    };
    return Contact;
}());
exports.Contact = Contact;
