define(['baseclass','Display','Assets','GameState','MenuState','SettingsState','KeyManager'],function(Class,Display,Assets,GameState,MenuState,SettingsState,KeyManager){
	var _this;
	var running = false;
	var keyManager;
	var title,width,height,g,display,canvas,imageloader;
	
	//Sates
	var gameState,menuState,settingsState;
	var Game = Class.extend({
		init:function(_title,_width,_height){
			_this = this;
			title = this.title = _title;
			width = this.width = _width;
			height = this.height = _height;
			keyManager = new KeyManager();
		}
	});
	function init(){
		display = new Display(title,width,height);
		
		gameState = new GameState(_this);
		menuState = new MenuState(_this);
		settingsState = new SettingsState(_this);
		window.State.setState(gameState);
	}
	function tick(){
		keyManager.tick();
		
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
	
	Game.prototype.getKeyManager = function(){
		return keyManager;
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