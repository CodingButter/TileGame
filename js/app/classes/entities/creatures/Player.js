define(['Creature'],function(Creature){
	var game;
	var Player = Creature.extend({
		init:function(_game, _x, _y, _width, _height){
			this._super(_game, _x,_y,Creature.DEFAULT_CREATURE_WIDTH,Creature.DEFAULT_CREATURE_HEIGHT);
			game = this.game;
		}
	});
	
	Player.prototype.tick = function(){
		this.getInput();
		this.move();
		game.getGameCamera().centerOnEntity(this);
	};
	
	Player.prototype.getInput = function(){
		this.xMove = 0;
		this.yMove = 0;
		if(game.getKeyManager().up)
			this.yMove = -this.speed;
		if(game.getKeyManager().down)
			this.yMove = this.speed;
		if(game.getKeyManager().left)
			this.xMove = -this.speed;
		if(game.getKeyManager().right)
			this.xMove = this.speed;
	}
	
	Player.prototype.render = function(g){
			g.myDrawImage(window.Assets.player,this.x - game.getGameCamera().getxOffset(),this.y - game.getGameCamera().getyOffset(),this.width,this.height);
	};
	return Player;
});