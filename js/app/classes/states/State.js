define(['baseclass'],function(Class){
	var currentState = null;
	window.State = {};
	var State = Class.extend({
		init:function(_game){
			this.game = _game;
		}
	});
	window.State.setState = function(state){
		currentState = state;
	};
	window.State.getState = function(){
		return currentState;
	};
	State.prototype.tick = function(){};
	State.prototype.render = function(g){};
	return State;
});