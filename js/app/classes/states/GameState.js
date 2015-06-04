define(['State','Assets',"Player"],function(State,Assets,Player){
	var player;
	var GameState = State.extend({
		init:function(_game){
			this._super(_game);
			player = new Player(this.game,30,60);
		}
	});
	//Override;
	GameState.prototype.tick = function(){
		player.tick();
	};
	//Override;
	GameState.prototype.render = function(g){
		player.render(g);
	};
	return GameState;
});