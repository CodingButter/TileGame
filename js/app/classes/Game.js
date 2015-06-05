define(['Class','Display','Assets','GameState','MenuState','SettingsState','KeyManager','GameCamera'],function(Class,Display,Assets,GameState,MenuState,SettingsState,KeyManager,GameCamera){
	var _this;
	var running = false;
	var keyManager;
	var gameCamera;
	var title,width,height,g,display,canvas,imageloader;
	
	//Sates
	var gameState,menuState,settingsState;
	var Game = Class.extend({
		init:function(_title,_width,_height){
			_this = this;
			title = this.title = _title;
			width = _width;
			height = _height;
			keyManager = new KeyManager();
		}
	});
	function init(){
		display = new Display(title,width,height);
		window.Assets.init();
		
		gameCamera = new GameCamera(_this,0,0);
		gameState = new GameState(_this);
		menuState = new MenuState(_this);
		settingsState = new SettingsState(_this);
		window.State.setState(gameState);
	}
	function tick(_dt){
		keyManager.tick();
		
		if(window.State.getState() !== null)
			window.State.getState().tick(_dt);
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
		
		var fps = 60;
		var timePerTick = 1000/fps;
		var delta = 0;
		var now;
		var lastTime = Date.now();
		var timer = 0;
		var ticks = 0;
		function loop(){
			if(running){
				now = Date.now();
				// Delta is the time since the last frame
				delta = now - lastTime;
				// Add the delta to our timer
				timer += delta;
				lastTime = now;

				if(timer >= timePerTick) {
				// Logic updates will need to know what the delta was.
				dt = timer / 1000;
				tick(dt);
				render();
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
	Game.prototype.getGameCamera = function(){
		return gameCamera;
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
	Game.prototype.getWidth = function(){
			return width;
	}
	Game.prototype.getHeight = function(){
			return height;
	}
	
	return Game;
});