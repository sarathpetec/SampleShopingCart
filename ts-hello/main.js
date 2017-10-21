"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var like_component_1 = require("./like.component");
var point = new point_1.Point(1, 3);
point.draw();
var component = new like_component_1.LikeComponent(10, true);
component.onclick();
console.log("Likes conunt: " + component.likeCount + ", isSelected: " + component.isSelected);
