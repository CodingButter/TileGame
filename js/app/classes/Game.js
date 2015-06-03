define(['baseclass','Display','Assets',],function(Class,Display,Assets){
	var running = false;
	var title,width,height,g,display,assets,canvas,imageloader;
	var Game = Class.extend({
		init:function(_title,_width,_height){
			title = this.title = _title;
			width = this.width = _width;
			height = this.height = _height;
		}
	});
	function init(){
		display = new Display(title,width,height);		
		assets = new Assets();
	}
	
	function tick(){
		
	}
	function render(){
		g = display.getGraphics();
		//Clear Screen
		g.clearRect(0,0,width,height);
		//Draw Here!

		g.drawImage(assets.player.sheet,assets.player.x,assets.player.y,assets.player.width,assets.player.height,20,10,assets.player.width,assets.player.height);
     
		//End Drawing
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
	};
	Game.prototype.stop = function(){
		if(!running)return;
		running = false;
	};
	return Game;
});