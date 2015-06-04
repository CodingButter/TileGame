define(['Entity'],function(Entity){
	var health;
	var Creature = Entity.extend({
		init:function(_x,_y){
			this._super(_x,_y);	
			health = 10;
		}
	});
	return Creature;
});