export interface Ane {
	id: number;
	start: Point;
	end: Point;
	lineWidth: number;
	style: string;
	lineCap: string;
	aneAlpha: number;
}

interface Point{
	x: number;
	y: number;
}