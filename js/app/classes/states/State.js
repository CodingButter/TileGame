define(['baseclass'],function(Class){
	var currentState = null;
	window.State = {};
	var State = Class.extend({
		init:function(){
			throw new Error("Cannot create an instance of the State class");
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