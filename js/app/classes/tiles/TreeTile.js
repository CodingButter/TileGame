define(['Tile','Assets'],function(Tile,Assets){
    var Tree = Tile.extend({
        init:function(_id){
            this._super(Assets.tree,_id);
        }
    });

    Tree.prototype.isSolid = function(){
        return true;
    };

    return Tree;
});