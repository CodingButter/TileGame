define(['Tile','Assets'],function(Tile,Assets){
	var Rock = Tile.extend({
		init:function(_id){
			this._super(Assets.stone,_id);
		}
	});

	Rock.prototype.isSolid = function(){
		return true;
	};

	return Rock;
});