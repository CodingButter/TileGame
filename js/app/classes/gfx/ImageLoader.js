define(["Class"],function(Class){
	var ImageLoader = Class.extend({
		init:function(){
			
			
		}
	});
	ImageLoader.prototype.loadImage = function(path){
		var loaded = false;
		var image = new Image();
		image.onLoad  = function(){
			loaded = true;
		};
		image.src = path;
		return image;
	};
	return ImageLoader;
});