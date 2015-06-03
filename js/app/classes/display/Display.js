define(['jquery','baseclass'],function($,Class){
	
	var Display = Class.extend({
		init:function(title,width,height){
			var _this = this;
			this.title = title;
			this.width = width;
			this.height = height; 
		    function createDisplay(){
				$("title").html(title);
				
				var canvas = $("<canvas></canvas>");
				canvas.css({"width":width,"height":height});
				$("body").append(canvas);
				_this.canvas = canvas;
			}
			createDisplay();
		}
	});
	Display.prototype.getCanvas = function(){
		return this.canvas;
	};
	
	return Display;
});