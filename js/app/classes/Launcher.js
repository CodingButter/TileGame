define(['baseclass','Game'],function(Class,Game){
	
	var Launcher = Class.extend({
			init:function(){
				var game = new Game("Awesome Title",640,360);
				game.start();
			}
	});
	
	Launcher.prototype.main = function(args){
		
	};
	
	return Launcher;
});