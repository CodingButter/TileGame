define(['Tile','Assets'],function(Tile,Assets){
	var GrassTile = Tile.extend({
		init:function(_id){
			this._super(Assets.grass,_id);
		}
	});
	return GrassTile;
});	