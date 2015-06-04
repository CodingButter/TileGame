define(['State'],function(State){
	var SettingsState = State.extend({
		init:function(_game){
			this._super(_game);
		}
	});
	//Override;
	SettingsState.prototype.tick = function(){
		
	};
	//Override;
	SettingsState.prototype.render = function(g){
	};
	return SettingsState;
});