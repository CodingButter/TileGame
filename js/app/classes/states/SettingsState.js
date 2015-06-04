define(['State','Assets'],function(State,Assets){
	var assets = new Assets();
	var SettingsState = State.extend({
		init:function(){
			//this._super();
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