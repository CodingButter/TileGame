define(['Tile'],function(Tile){
	var GrassTile = Tile.extend({
		init:function(_id){
			this._super(window.Assets.grass,_id);			
		}
	});
	return GrassTile;
});	