define(['Class','Tile','GrassTile','DirtTile','RockTile','TreeTile'],function(Class,Tile,GrassTile,DirtTile,RockTile,TreeTile){
	Tile.grassTile = new GrassTile(0);
	Tile.dirtTile = new DirtTile(1);
	Tile.rockTile = new RockTile(2);
	Tile.treeTile = new TreeTile(3);
	return Tile;
});