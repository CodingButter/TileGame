define(['Class'],function(Class){
	var currentState = null;
	var State = Class.extend({
		init:function(_game){
			this.game = _game;
		}
	});
	State.setState = function(state){
		currentState = state;
	};
	State.getState = function(){
		return currentState;
	};
	State.prototype.tick = function(){};
	State.prototype.render = function(g){};
	return State;
});