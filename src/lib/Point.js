// data class
export default class Point {
	static make( data ) {
		const point = new Point();
        point.id = data.id;
        point.x = data.x;
        point.y = data.y;
        point.vec = Point.generateVector();
		return point;
    }
    
    static generateVector() {
        return [ Math.random() * 0.001, Math.random() * 0.001 ];
    }

	toString () {
		return `${this.id}-${this.x},${this.y}`
	}

	constructor() {
		this.id = null;
        this.x = null;
        this.y = null;
        this.vec = null;
	}
}
