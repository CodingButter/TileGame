define(['Creature'],function(Creature){
	var Player = Creature.extend({
		init:function(_x,_y){
			this._super(_x,_y);
		}
	});
	Player.prototype.tick = function(){
		this.x+=1;
	};
	Player.prototype.render = function(g){
			g.myDrawImage(window.Assets.player,this.x,this.y);
	};
	return Player;
});