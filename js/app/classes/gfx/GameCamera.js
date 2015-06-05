define(['Class'],function(Class){
	var xOffset,yOffset,game;
	var GameCamera = Class.extend({
		init:function(_game,_xOffset,_yOffset){
			xOffset = _xOffset; 
			yOffset = _yOffset;
			game = _game;
		}
		
	});
	GameCamera.prototype.centerOnEntity = function(e){
		xOffset = e.getX() - game.getWidth()/2 + e.getWidth()/2;
		yOffset = e.getY() - game.getHeight()/2 + e.getHeight()/2;
	}
	GameCamera.prototype.move = function(_xAmt,_yAmt){ 
		xOffset += _xAmt;
		yOffset += _yAmt;
	}
	
	GameCamera.prototype.getxOffset = function(){
			return xOffset;
	}
	GameCamera.prototype.setxOffset = function(_retuxOffset){
			retuxOffset = _retuxOffset;
	}
	
	GameCamera.prototype.getyOffset = function(){
			return yOffset;
	}
	GameCamera.prototype.setyOffset = function(_yOffset){
			yOffset = _yOffset;
	}
	
	return GameCamera;
});	