define(['Class'],function(Class){
	var tiles = [];
	var TILEWIDTH = 64, TILEHEIGHT = 64;
	var id;
	var Tile = Class.extend({
		init:function(_texture,_id){
			this.texture = _texture;
			id = _id;
			
			tiles[_id] = this;
			Tile.tiles = tiles;
		}
	});
	Tile.tiles = tiles;
	Tile.TILEWIDTH = TILEWIDTH;
	Tile.TILEHEIGHT = TILEHEIGHT;
	Tile.prototype.tick = function(){};
	
	Tile.prototype.render = function(g,_x,_y){
		g.myDrawImage(this.texture,_x,_y,TILEWIDTH,TILEHEIGHT);
	}
	
	Tile.prototype.getId = function(){
			return id;
	}
	
	Tile.prototype.isSolid = function(){
		return false;
	}
	
	return Tile;
});	