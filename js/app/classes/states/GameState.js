define(['State','Assets'],function(State,Assets){
	var assets = new Assets();
	var GameState = State.extend({
		init:function(){
			//this._super();
		}
	});
	//Override;
	GameState.prototype.tick = function(){
		
	};
	//Override;
	GameState.prototype.render = function(g){	g.drawImage(assets.player.sheet,assets.player.x,assets.player.y,assets.player.width,assets.player.height,10,10,assets.player.width,assets.player.height);
	};
	return GameState;
});