define(['Entity'],function(Entity){
	var health;
	var Creature = Entity.extend({
		init:function(_game,_x,_y){
			this._super(_game,_x,_y);	
			health = 10;
		}
	});
	return Creature;
});