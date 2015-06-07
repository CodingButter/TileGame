define(['Class'], function (Class) {
    var _ = Privacy.createKeys();
    var Entity = Class.extend({
        init: function (_game, _x, _y, _width, _height) {
            _(this).x = _x;
            _(this).y = _y;
            _(this).width = _width;
            _(this).height = _height;
            _(this).game = _game;
        }
    });
    Entity.prototype.tick = function () {
        throw new Error("Inheritors of the Entity Class must have a tick method");
    };

    Entity.prototype.render = function (g) {
        throw new Error("Inheritors of the Entity Class must have a tick method");
    };

    Entity.prototype.getX = function () {
        return _(this).x;
    };
    Entity.prototype.setX = function (_x) {
        _(this).x = _x;
    };

    Entity.prototype.getY = function () {
        return _(this).y;
    };
    Entity.prototype.setY = function (_y) {
        _(this).y = _y;
    };

    Entity.prototype.getWidth = function () {
        return _(this).width;
    };
    Entity.prototype.setWidth = function (_width) {
        _(this).width = _width;
    };

    Entity.prototype.getHeight = function () {
        return _(this).height;
    };
    Entity.prototype.setHeight = function (_height) {
        _(this).height = _height;
    };

    return Entity;
});