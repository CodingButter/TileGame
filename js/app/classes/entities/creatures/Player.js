define(['Creature','Assets'],function(Creature,Assets){
	var assets = new Assets();
	var Player = Creature.extend({
		init:function(_x,_y){
			this._super(_x,_y);
		}
	});
	Player.prototype.tick = function(){
		
	};
	Player.prototype.render = function(g){
			g.myDrawimage(assets.player,this.x,this.y);
	};
	return Player;
});