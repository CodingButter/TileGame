define(['Creature','Assets'],function(Creature,Assets){
	var _ = Privacy.createKeys();
	var game;
	var Player = Creature.extend({
		init:function(_game, _x, _y, _width, _height){
			this._super(_game, _x,_y,Creature.DEFAULT_CREATURE_WIDTH,Creature.DEFAULT_CREATURE_HEIGHT);
			game = _(this).game;
		}
	});
	Player.prototype.tick = function(_dt){
		this.getInput(_dt);
		_(this).move();
		game.getGameCamera().centerOnEntity(this);


	};
	Player.prototype.getInput = function(_dt) {
		_(this).xMove = 0;
		_(this).yMove = 0;
		if (game.getKeyManager().up)
			_(this).yMove = -_(this).speed * _dt;
		if (game.getKeyManager().down)
			_(this).yMove = _(this).speed * _dt;
		if (game.getKeyManager().left)
			_(this).xMove = -_(this).speed * _dt;
		if (game.getKeyManager().right)
			_(this).xMove = _(this).speed * _dt;
	};

	Player.prototype.render = function(g){
			g.myDrawImage(Assets.player,_(this).x - game.getGameCamera().getxOffset(),_(this).y - game.getGameCamera().getyOffset(),_(this).width,_(this).height);
	};
	return Player;
});