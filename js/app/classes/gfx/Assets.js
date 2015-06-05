define(['jquery','Class','ImageLoader','SpriteSheet'],function($,Class,ImageLoader,SpriteSheet){
	var width = 32,height = 32;
	var sheet, imageloader;
	var Assets = Class.extend({
		init:function(){
		}
	});
	Assets.prototype.init = function(){
		imageloader = new ImageLoader();
		//sheet = new SpriteSheet(imageloader.loadImage('res/textures/sheet.png'));
		sheet = new SpriteSheet(imageloader.loadImage('http://1.bp.blogspot.com/-AqYUlT8IPls/UCFdxy14LEI/AAAAAAAAD0M/O3yVb379p7c/s1600/ultima_v_5_warriors_of_destiny_tileset.PNG'));
		this.player = sheet.crop(4,height * 10,width,height);
		this.dirt = sheet.crop(width,5,width,height);
		this.grass = sheet.crop(width * 6,0,width,height);
		this.stone = sheet.crop(width * 7,0,width,height);
		this.tree = sheet.crop(width * 8,0,width,height);
	};
	window.Assets = new Assets();
});