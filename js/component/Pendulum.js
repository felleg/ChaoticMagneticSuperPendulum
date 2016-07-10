function Pendulum(id, x, y, polarity, vx, vy, ax, ay, mass, height, strength) {
	Magnet.call(this, id, x, y, polarity, strength);
	this.velocity = new Location(vx, vy);;
	this.acceleration = new Location(ax, ay);
	this.mass = mass;
	this.height = height;
	this.color = 'yellow';
}

Pendulum.inherits(Magnet);

Pendulum.method(function toString(){
	return "Pendulum: " + this.id + ", Polarity: " + this.polarity + ", Strength: " + this.strength + ", Velocity: " + this.velocity + ", Acc: " + this.acceleration + ", Mass: " + this.mass + ", Height: " + this.height;
});
