define(['baseclass','Display','Assets','GameState','MenuState'],function(Class,Display,Assets,GameState,MenuState){
	var running = false;
	var title,width,height,g,display,assets,canvas,imageloader;
	
	//Sates
	var gameState,menuState;
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
		
		gameState = new GameState();
		menuState = new MenuState();
		window.State.setState(gameState);
	}
	function tick(){
		if(window.State.getState() !== null)
			window.State.getState().tick();
	}
	function render(){
		g = display.getGraphics();
		//Clear Screen
		g.clearRect(0,0,width,height);
		//Draw Here
     	if(window.State.getState() !== null)
			window.State.getState().render(g);
		//End Drawing
	}
	Game.prototype.run = function(){
		init();
		
		var fps = 30;
		var timePerTick = 1000/fps;
		var delta = 0;
		var now;
		var n = new Date();
		var lastTime = n.getTime();
		var timer = 0;
		var ticks = 0;
		function loop(){
			if(running){
				var cd = new Date();
				now =  cd.getTime();
				delta += (now - lastTime)/timePerTick;
				timer += now - lastTime;
				lastTime = now;
				if(delta >= 1){
					tick();
					render();
					ticks++;
					delta--;
				}
				if(timer >= 1000){
					//console.log(ticks);
					ticks = 0;
					timer = 0;
				}
				window.requestAnimationFrame(loop);
			}
		}
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