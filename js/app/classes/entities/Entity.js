define(['baseclass'],function(Class){
	var x,y;
	var Entity = Class.extend({
		init:function(_game,_x,_y){
			this.x = _x;
			this.y = _y;
			this.game = _game;
		}
		
	});
	Entity.prototype.tick = function(){};
	Entity.prototype.render = function(g){};
	return Entity;
});