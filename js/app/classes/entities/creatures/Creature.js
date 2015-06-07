define(['Entity'],function(Entity){
	var _ = Privacy.createKeys();
	//Defaults
	var DEFAULT_SPEED = 250,
		DEFAULT_HEALTH = 10,
		DEFAULT_CREATURE_WIDTH = 64,
		DEFAULT_CREATURE_HEIGHT = 64;
	//Creature variables
	var speed,health,xMove,yMove;
	var Creature = Entity.extend({
		init:function(_game,_x,_y, _width, _height){
			this._super(_game,_x, _y, _width, _height);
			_(this).health = DEFAULT_HEALTH;
			_(this).speed = DEFAULT_SPEED;
            _(this).xMove = 0;
			_(this).yMove = 0;
            _(this).move = function(){
                this.x += parseInt(this.xMove);
                this.y += parseInt(this.yMove);
            };
		}
	});

	//Protected Static Variables
	Creature.DEFAULT_SPEED = DEFAULT_SPEED;
	Creature.DEFAULT_HEALTH = DEFAULT_HEALTH;
	Creature.DEFAULT_CREATURE_WIDTH = DEFAULT_CREATURE_WIDTH;
	Creature.DEFAULT_CREATURE_HEIGHT = DEFAULT_CREATURE_HEIGHT;
	
	Creature.prototype.getHealth = function(){
			return health;
	};
	Creature.prototype.setHealth = function(_health){
        _(this).health = _health;
	};
	
	Creature.prototype.getSpeed = function(){
			return speed;
	};
	Creature.prototype.setSpeed = function(_speed){
			_(this).speed = _speed;
	};
	
	return Creature;
});