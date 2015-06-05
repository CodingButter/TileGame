define(['Class','TileLoader','Utils'],function(Class,Tile,Utils){
	var tiles = [];
	var width,height;
	var spawnX,spawnY;
	var game;
	var World = Class.extend({
		
		init:function(_game,_path){
			game = this.game = _game;
			loadWorld(_path);
		}
	});
	
	World.prototype.tick = function(){};
	
	World.prototype.render = function(g){
		var xStart = parseInt(Math.max(0,
		game.getGameCamera().getxOffset()/Tile.TILEWIDTH));
		var xEnd = parseInt(Math.min(width,
		(game.getGameCamera().getxOffset() + game.getWidth()) / Tile.TILEWIDTH +1));
		var yStart = parseInt(Math.max(0,
		game.getGameCamera().getyOffset()/Tile.TILEHEIGHT));
		var yEnd = parseInt(Math.min(height,
		(game.getGameCamera().getyOffset() + game.getHeight()) / Tile.TILEHEIGHT +1));
		for(y = yStart;y <yEnd;y++){
			for(x = xStart;x<xEnd;x++){
				findTile(x,y).render(g,x * Tile.TILEWIDTH - game.getGameCamera().getxOffset(),y*Tile.TILEHEIGHT - game.getGameCamera().getyOffset());
			}
		}
	};
	
	function findTile(x,y){
		var t = Tile.tiles[tiles[x][y]];
		
		if(typeof t == 'undefined'){
			return Tile.dirtTile;
		}else return t;
	}
	function loadWorld(_path){
		var file = window.Utils.loadFileAsString(_path);
		var tokens = file.replace( /\n/g, " " ).split( " " );
		width = tokens[0];
		height =tokens[1];
		spawnX = tokens[2] * Tile.TILEWIDTH;
		spawnY = tokens[3] * Tile.TILEHEIGHT;
		for(y=0;y<height;y++){
			for(x = 0; x <width;x++){
					if(typeof tiles[x] == 'undefined'){
						tiles[x]=[];
					}
					tiles[x][y] = parseInt(tokens[(x + (y * width)) + 4]);
			}	
		}
	}
	
	World.prototype.getSpawnX = function(){
			return spawnX;
	}
	
	
	World.prototype.getSpawnY = function(){
			return spawnY;
	}
	
	return World;
});	