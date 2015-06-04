define(['jquery','baseclass'],function($,Class){
	var canvas,title,width,height,graphics;
	var Display = Class.extend({
		init:function(_title,_width,_height){
			var _this = this;
			title = this.title = _title;
			width = this.width = _width;
			height = this.height = _height; 
		    function createDisplay(){
				$("title").html(title);
				
				canvas = $("<canvas></canvas>");
				canvas.attr("id","canvas");	canvas.css({"width":width,"height":height});
				$("body").append(canvas);
				graphics = document.getElementById("canvas").getContext("2d");
			}
			createDisplay();
		}
	});
	Display.prototype.getGraphics = function(){
		return graphics;
	};
	CanvasRenderingContext2D.prototype.myDrawImage = function(asset,_x,_y)	{
		this.drawImage(asset.sheet,asset.x,asset.y,
					asset.width,asset.height,_x,_y,
					asset.width,asset.height);
	};
	
	return Display;
});