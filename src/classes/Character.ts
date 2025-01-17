import { field_h, field_w } from '../init/variables';
import { drawSprite } from '../functions/drawSprite';

class Character {
	snum: number;
	x: number;
	y: number;
	vx: number;
	vy: number;
	kill: boolean;
	count: number;
	constructor(snum: number, x: number, y: number, vx: number, vy: number) {
		this.snum = snum;
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.kill = false;
		this.count = 0;
	}

	update() {
		this.count++;
		this.x += this.vx;
		this.y += this.vy;

		if (
			this.x < 0 ||
			this.x > field_w << 8 ||
			this.y < 0 ||
			this.y > field_h << 8
		) {
			this.kill = true;
		}
	}

	draw(other?: number) {
		drawSprite(this.snum, this.x, this.y, other);
	}
}

export { Character };
