"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var user_model_1 = require("../models/user.model");
var gDemoUsers = {
    _id: 'u101',
    name: "Koren Levi",
    coins: 100,
    moves: []
};
var LOGGED_USER = 'loggedinUser';
var USER = 'user';
// console.log('sdsdsd');
var UserService = /** @class */ (function () {
    // private ff = this.signup('Koren Levi')
    // private _user$ = new BehaviorSubject<User>(null)
    // public gUsers = this.login(gDemoUsers)
    // private LOGGED_USER = 'loggedinUser'
    // private USERS = 'users'
    function UserService() {
        this._user$ = new rxjs_1.BehaviorSubject(this.load(USER) || null);
        //  private f = this._print()
        this.user$ = this._user$.asObservable();
    }
    UserService.prototype._loadUsers = function () {
        var users = JSON.parse(sessionStorage.getItem(USER));
        if (!users || !users.length)
            users = gDemoUsers;
        sessionStorage.setItem(USER, JSON.stringify(users));
        this.login(users[0]);
        return users;
    };
    UserService.prototype.signup = function (name) {
        var user = this.load(USER);
        if (!user) {
            var newUser = new user_model_1.User();
            newUser.name = name;
            this.store(USER, newUser);
            this._user = newUser;
        }
        else {
            localStorage.removeItem('user');
            this.store('user', new user_model_1.User(name));
        }
        // this._user$.next(this._user);
    };
    UserService.prototype.getUser = function () {
        return this.user$;
    };
    UserService.prototype.getDemoUser = function () {
        return this.login(gDemoUsers);
        // return gDemoUsers
    };
    UserService.prototype.login = function (user) {
        // sessionStorage.setItem(USER, JSON.stringify(user))
        localStorage[USER] = JSON.stringify(user);
        this._user = user;
        this._user$.next(this._user);
        return user;
    };
    UserService.prototype.getLoggedinUser = function () {
        return JSON.parse(sessionStorage.getItem(USER));
        // var user =  
        // return Promise.resolve(user)
    };
    UserService.prototype.store = function (USER, any) {
        localStorage[USER] = JSON.stringify(any);
    };
    UserService.prototype.load = function (USER) {
        var str = localStorage[USER] || 'null';
        return JSON.parse(str);
    };
    UserService.prototype.addMove = function (contact, amount) {
        var newMove = {
            toId: contact._id,
            to: contact.name,
            amount: amount,
            at: Date.now()
        };
        var currUser = __assign({}, this._user$.value);
        currUser.coins -= amount;
        currUser.moves.unshift(newMove);
        this.store('user', currUser);
        this._user$.next(currUser);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
