define(['State','Assets',"Player"],function(State,Assets,Player){
	var assets = new Assets();
	var player;
	var GameState = State.extend({
		init:function(){
			//this._super();
			player = new Player(0,0);
		}
	});
	//Override;
	GameState.prototype.tick = function(){
		
	};
	//Override;
	GameState.prototype.render = function(g){
		player.render();
	};
	return GameState;
});