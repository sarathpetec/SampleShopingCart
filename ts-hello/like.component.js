"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likeCount, isSelected) {
        this.likeCount = likeCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onclick = function () {
        this.likeCount += (this.isSelected) ? 1 : -1;
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
