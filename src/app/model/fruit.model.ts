export interface Fruit {
	num: number;
	fruit: Array<SingleFruit>;
}

export interface SingleFruit {
	id: number;
	position: Point;
	status: string; // 'born','die','fly'
	flySpeed: number;
}

interface Point {
	x: number;
	y: number;
}