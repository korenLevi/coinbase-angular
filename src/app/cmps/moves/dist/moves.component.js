"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MovesComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var MovesComponent = /** @class */ (function () {
    function MovesComponent(ContactService, BitcoinService, UserService, ref) {
        this.ContactService = ContactService;
        this.BitcoinService = BitcoinService;
        this.UserService = UserService;
        this.ref = ref;
        this.onClose = new core_1.EventEmitter();
        this.isClick = false;
    }
    MovesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // alert('f')
                // this.user = this.UserService.getUser().
                this.userSubscriber = this.UserService.user$.subscribe(function (user) { return _this.user = user; });
                // console.log('this.userSubscribe',this.userSubscriber);
                console.log('contact', this.user, this.userSubscriber);
                this.cryptoCalc(this.user.coins);
                return [2 /*return*/];
            });
        });
    };
    MovesComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // readonly
                this.isClick = true;
                // const contact = { ...this.contact, ...form.value }
                console.log('contact', this.contact, form);
                setTimeout(function () {
                    _this.UserService.addMove(_this.contact, form.value.usd);
                    _this.onClose.emit();
                    // form.reset()
                }, 3000);
                return [2 /*return*/];
            });
        });
    };
    MovesComponent.prototype.delayInputs = function () {
        // const el = document.get('.loading-span')
        var el = this.ref.nativeElement;
        console.log(this.span);
    };
    MovesComponent.prototype.cryptoCalc = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('this.crypto', val);
                        // console.log(await this.BitcoinService.getRate(5));
                        //  this.crypto = await this.BitcoinService.getRate(val)
                        return [4 /*yield*/, this.BitcoinService.getRate(val).toPromise().then(function (res) {
                                _this.crypto = res;
                                console.log(_this.crypto);
                            })];
                    case 1:
                        // console.log(await this.BitcoinService.getRate(5));
                        //  this.crypto = await this.BitcoinService.getRate(val)
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MovesComponent.prototype.ngOnDestroy = function () {
        this.userSubscriber.unsubscribe();
    };
    __decorate([
        core_1.Output()
    ], MovesComponent.prototype, "onClose");
    __decorate([
        core_2.Input()
    ], MovesComponent.prototype, "contact");
    __decorate([
        core_3.ViewChild('loading')
    ], MovesComponent.prototype, "span");
    MovesComponent = __decorate([
        core_1.Component({
            selector: 'moves',
            templateUrl: './moves.component.html',
            styleUrls: ['./moves.component.scss']
        })
    ], MovesComponent);
    return MovesComponent;
}());
exports.MovesComponent = MovesComponent;
