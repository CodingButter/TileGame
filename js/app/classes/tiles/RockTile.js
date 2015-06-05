define(['Tile'],function(Tile){
	var Rock = Tile.extend({
		init:function(_id){
			this._super(window.Assets.stone,_id);
		}
	});
	
	Rock.prototype.isSolid = function(){
		return true;
	}
	
	return Rock;
});	