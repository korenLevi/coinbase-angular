"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserPageComponent = void 0;
var core_1 = require("@angular/core");
var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(userService, bitcoinService) {
        this.userService = userService;
        this.bitcoinService = bitcoinService;
    }
    // bitCoin$: Observable<number> | number
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscriber = this.userService.user$.subscribe(function (user) {
            console.log('user', user);
            _this.user = user;
        });
        this.bitcoinService.getRate(this.user.coins).toPromise().then(function (res) {
            console.log('this.bitCoin', res);
            _this.bitCoin = res;
            console.log('this.bitCoin', _this.bitCoin);
        });
    };
    UserPageComponent.prototype.ngOnDestroy = function () {
        this.userSubscriber.unsubscribe();
    };
    UserPageComponent = __decorate([
        core_1.Component({
            selector: 'user-page',
            templateUrl: './user-page.component.html',
            styleUrls: ['./user-page.component.scss']
        })
    ], UserPageComponent);
    return UserPageComponent;
}());
exports.UserPageComponent = UserPageComponent;
