define(['Class','Tile','GrassTile','DirtTile','RockTile'],function(Class,Tile,GrassTile,DirtTile,RockTile){
	Tile.grassTile = new GrassTile(0);
	Tile.dirtTile = new DirtTile(1);
	Tile.rockTile = new RockTile(2);
	return Tile;
});