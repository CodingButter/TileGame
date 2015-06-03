define(['baseclass','Display'],function(Class,Display){
	var running = false;
	var title,width,height;
	var Game = Class.extend({
		init:function(_title,_width,_height){
			title = this.title = _title;
			width = this.width = _width;
			height = this.height = _height;
		}
	});
	function init(){
		var display = new Display(title,width,height);
	}
	
	function tick(){
		
	}
	function render(){
		
	}
	function loop(){
		if(running){
			tick();
			render();
			setTimeout(loop,17);
		}
	}
	Game.prototype.run = function(){
		init();
		
		loop();
	};
	Game.prototype.start = function(){
		if(running)return;
		running = true;
		this.run();
	}
	Game.prototype.stop = function(){
		if(!running)return;
		running = false;
	}
	return Game;
});