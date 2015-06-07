define(['Tile','Assets'],function(Tile,Assets){
	var DirtTile = Tile.extend({
		init:function(_id){
			this._super(Assets.dirt,_id);
		}
	});
	return DirtTile;
});	