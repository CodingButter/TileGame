define(['jquery','Class','ImageLoader','SpriteSheet'],function($,Class,ImageLoader,SpriteSheet){
	var DEFAULT_WIDTH = 32,DEFAULT_HEIGHT = 32;
	var sheet, imageloader;
	var Assets = Class.extend({
		init:function(_path,_width,_height){
			this.path = _path;
			this.width = _width;
			this.height = _height;
			imageloader = new ImageLoader();
			this.sheet = new SpriteSheet(imageloader.loadImage(this.path));
		}
	});
	window.Assets = new Assets('http://i52.tinypic.com/wl2e6x.jpg',DEFAULT_WIDTH,DEFAULT_HEIGHT);
	console.log(window.Assets.sheet.crop);
	window.Assets.player = window.Assets.sheet.crop(window.Assets.width*3,window.Assets.height * 2,window.Assets.width,window.Assets.height);
	window.Assets.dirt = window.Assets.sheet.crop(0,0,window.Assets.width,window.Assets.height);
	window.Assets.grass = window.Assets.sheet.crop(window.Assets.width,0,window.Assets.width,window.Assets.height);
	window.Assets.stone = window.Assets.sheet.crop(window.Assets.width * 2,0,window.Assets.width,window.Assets.height);
	window.Assets.tree = window.Assets.sheet.crop(0,window.Assets.height * 3,window.Assets.width,window.Assets.height);
	return Assets;
});