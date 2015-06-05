define(['State','Assets',"Player",'TileLoader','World'],function(State,Assets,Player,Tile,World){
	var player,world,game;
	var GameState = State.extend({
		init:function(_game){
			this._super(_game);
			game = _game;
			world = new World(_game,"res/worlds/world1.txt");
			player = new Player(this.game,world.getSpawnX(),world.getSpawnY());
		}
	});
	//Override;
	GameState.prototype.tick = function(_dt){
		world.tick(_dt);
		player.tick(_dt);
	};
	//Override;
	GameState.prototype.render = function(g){
		world.render(g);
		player.render(g);
	};
	return GameState;
});