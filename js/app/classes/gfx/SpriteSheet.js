define(['baseclass'],function(Class){
	var sheet;
	
	var SpriteSheet = Class.extend({
		init:function(_sheet){
			sheet = this.sheet = _sheet;
		}
	});
	
	SpriteSheet.prototype.crop = function(x,y,width,height){
		return {"sheet":sheet, "x":x, "y":y, "width":width,"height":height};
	};
	
	return SpriteSheet;
});