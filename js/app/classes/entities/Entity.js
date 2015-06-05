
define(['Class'],function(Class){
	var Entity = Class.extend({
		init:function(_game, _x, _y, _width, _height){
			this.x = _x;
			this.y = _y;
			this.width = _width;
			this.height = _height;
			this.game = _game;
		}
	});
	Entity.prototype.tick = function(){};
	
	Entity.prototype.render = function(g){};
	
	Entity.prototype.getX = function(){
			return this.x;
	}
	Entity.prototype.setX = function(_x){
			this.x = _x;
	}
	
	Entity.prototype.getY = function(){
			return this.y;
	}
	Entity.prototype.setY = function(_y){
			this.y = _y;
	}
	
	Entity.prototype.getWidth = function(){
			return this.width;
	}
	Entity.prototype.setWidth = function(_width){
			this.width = _width;
	}
	
	Entity.prototype.getHeight = function(){
			return this.height;
	}
	Entity.prototype.setHeight = function(_height){
			height = _height;
	}
	
	return Entity;
});