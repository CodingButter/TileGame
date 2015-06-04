define(['Creature'],function(Creature){
	var game;
	var Player = Creature.extend({
		init:function(_game, _x,_y){
			this._super(_game,_x,_y);
			game = _game;
		}
	});
	Player.prototype.tick = function(){
		if(game.getKeyManager().up)this.y -= 3;
		if(game.getKeyManager().down)this.y += 3;
		if(game.getKeyManager().left)this.x -= 3;
		if(game.getKeyManager().right)this.x += 3;
	};
	Player.prototype.render = function(g){
			g.myDrawImage(window.Assets.player,this.x,this.y);
	};
	return Player;
});