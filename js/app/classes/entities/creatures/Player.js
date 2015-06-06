define(['Creature','Assets'],function(Creature,Assets){
	var game;
	var Player = Creature.extend({
		init:function(_game, _x, _y, _width, _height){
			this._super(_game, _x,_y,Creature.DEFAULT_CREATURE_WIDTH,Creature.DEFAULT_CREATURE_HEIGHT);
			game = this.game;
			this.assets = new Assets('http://imageshack.com/f/685/actor3.png',32,32);
		}
	});
	
	Player.prototype.tick = function(_dt){
		this.getInput(_dt);
		this.move();
		game.getGameCamera().centerOnEntity(this);
	};
	
	Player.prototype.getInput = function(_dt){
		this.xMove = 0;
		this.yMove = 0;
		if(game.getKeyManager().up)
			this.yMove = -this.speed * _dt;
		if(game.getKeyManager().down)
			this.yMove = this.speed * _dt;
		if(game.getKeyManager().left)
			this.xMove = -this.speed * _dt;
		if(game.getKeyManager().right)
			this.xMove = this.speed * _dt;
	}
	
	Player.prototype.render = function(g){
			g.myDrawImage(window.Assets.player,this.x - game.getGameCamera().getxOffset(),this.y - game.getGameCamera().getyOffset(),this.width,this.height);
	};
	return Player;
});