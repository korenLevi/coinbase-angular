"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModalComponent = void 0;
var core_1 = require("@angular/core");
var AuthModalComponent = /** @class */ (function () {
    function AuthModalComponent(UserService) {
        this.UserService = UserService;
        this.onClose = new core_1.EventEmitter();
        this.fname = "koren";
        this.isSigningIn = false;
    }
    AuthModalComponent.prototype.ngOnInit = function () {
    };
    AuthModalComponent.prototype.onSubmit = function (form) {
        if (this.isSigningIn) {
            var fullname = form.value.fname + ' ' + form.value.lname;
            this.UserService.signup(fullname);
        }
        else {
            var fullname = form.value.fname + ' ' + form.value.lname;
            this.UserService.signup(fullname);
        }
        window.location.reload();
        this.onClose.emit();
        form.reset();
    };
    __decorate([
        core_1.Output()
    ], AuthModalComponent.prototype, "onClose");
    AuthModalComponent = __decorate([
        core_1.Component({
            selector: 'auth-modal',
            templateUrl: './auth-modal.component.html',
            styleUrls: ['./auth-modal.component.scss']
        })
        // export class AuthModalComponent implements OnInit {
        //   constructor(private fb: FormBuilder) { }
        //   form: FormGroup
        //   ngOnInit(): void {
        //     this.form = this.fb.group({
        //       fname: ['Shalom', [Validators.required]],
        //       lname: '',
        //       email: '',
        //       password: '',
        //       userAgreement: false
        //     })
        //   }
        // }
    ], AuthModalComponent);
    return AuthModalComponent;
}());
exports.AuthModalComponent = AuthModalComponent;
