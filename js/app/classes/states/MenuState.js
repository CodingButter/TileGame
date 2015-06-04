define(['State','Assets'],function(State,Assets){
	var assets = new Assets();
	var MenuState = State.extend({
		init:function(){
			//this._super();
		}
	});
	//Override;
	MenuState.prototype.tick = function(){
		console.log("running the menu state");
	};
	//Override;
	MenuState.prototype.render = function(g){
	};
	return MenuState;
});