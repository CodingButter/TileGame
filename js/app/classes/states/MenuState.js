define(['State'],function(State){
	var MenuState = State.extend({
		init:function(_game){
			this._super(_game);
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