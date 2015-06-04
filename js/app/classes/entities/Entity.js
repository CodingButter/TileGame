define(['baseclass'],function(Class){
	var x,y;
	var Entity = Class.extend({
		init:function(_x,_y){
			this.x = _x;
			this.y = _y;
		}
		
	});
	Entity.prototype.tick = function(){};
	Entity.prototype.render = function(g){};
	return Entity;
});