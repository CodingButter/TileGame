define(['jquery','baseclass','ImageLoader','SpriteSheet'],function($,Class,ImageLoader,SpriteSheet){
	var width = 16,height = 16;
	var sheet, imageloader;
	var Assets = Class.extend({
		init:function(){
			this.init();
		}
	});
	Assets.prototype.init = function(){
		imageloader = new ImageLoader();
		sheet = new SpriteSheet(imageloader.loadImage('res/textures/sheet.png'));
		this.player = sheet.crop(0,0,width,height);
		this.dirt = sheet.crop(width,0,width,height);
		this.grass = sheet.crop(width * 2,0,width,height);
		this.stone = sheet.crop(width * 3,0,width,height);
		this.tree = sheet.crop(width * 4,0,width,height);
	};
	window.Assets = new Assets();
});