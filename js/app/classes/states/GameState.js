define(['State','Assets',"Player"],function(State,Assets,Player){
	var assets = new Assets();
	var GameState = State.extend({
		init:function(){
			//this._super();
			this.player = new Player(0,0);
		}
	});
	//Override;
	GameState.prototype.tick = function(){
		
	};
	//Override;
	GameState.prototype.render = function(g){
		this.player.render();
	};
	return GameState;
});