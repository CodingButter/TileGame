define(['Class','Game'],function(Class,Game){
	/*
	*	Launch The Game and Set The Title of the Document
	*	Also set the width and height of the Canvas;
	*/
	var Launcher = Class.extend({
			init:function(){
				var game = new Game("Tile Game",800,600);
				game.start();
			}
	});
	
	Launcher.prototype.main = function(args){
	};
	
	return Launcher;
});