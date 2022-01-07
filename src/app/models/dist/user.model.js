"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, coins, moves) {
        if (name === void 0) { name = ''; }
        if (coins === void 0) { coins = 100; }
        if (moves === void 0) { moves = []; }
        this.name = name;
        this.coins = coins;
        this.moves = moves;
    }
    return User;
}());
exports.User = User;
