define(['Entity'],function(Entity){
	var DEFAULT_SPEED = 7.0,
		DEFAULT_HEALTH = 10, 
		DEFAULT_CREATURE_WIDTH = 64,
		DEFAULT_CREATURE_HEIGHT = 64;
	var speed,health,xMove,yMove;
	var Creature = Entity.extend({
		init:function(_game,_x,_y, _width, _height){
			this._super(_game,_x, _y, _width, _height);	
			health = this.health = DEFAULT_HEALTH;
			speed = this.speed = DEFAULT_SPEED;
			xMove = this.xMove = 0;
			yMove = this.yMove = 0;
		}
	});
	
	Creature.prototype.move = function(){
		this.x += this.xMove;
		this.y += this.yMove;
	}
	Creature.DEFAULT_SPEED = DEFAULT_SPEED;
	Creature.DEFAULT_HEALTH = DEFAULT_HEALTH;
	Creature.DEFAULT_CREATURE_WIDTH = DEFAULT_CREATURE_WIDTH;
	Creature.DEFAULT_CREATURE_HEIGHT = DEFAULT_CREATURE_HEIGHT;
	Creature.prototype.getHealth = function(){
			return health;
	}
	Creature.prototype.setHealth = function(_health){
			health = _health;
	}
	
	Creature.prototype.getSpeed = function(){
			return speed;
	}
	Creature.prototype.setSpeed = function(_speed){
			speed = _speed;
	}
	
	return Creature;
});