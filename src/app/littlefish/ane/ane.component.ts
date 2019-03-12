import { Component, OnInit } from '@angular/core';
import { Ane } from '../../model/ane.model';
import { DrawService } from '../../service/draw.service';


@Component({
  selector: 'app-ane',
  templateUrl: './ane.component.html',
  styleUrls: ['./ane.component.css']
})
export class AneComponent implements OnInit {

  private aneArr: Array<Ane> = [];
  private aneLength: number = 300;
  private aneNum: number = 50;
  private ane: Ane;
  private lineWidth: number = 20;
  private lineStyle: string = '#3b154e';
  private lengthRange: number = 20;
  private lineCap: string = 'round';
  private aneAlpha: number = 0.6;

  constructor(private drawService: DrawService) {
   }

  ngOnInit() {
  	this.createArr();
  	this.drawAnes();
  	this.drawService.aneArr = this.aneArr.slice(); 
  }

  createArr(){

  	const startP = 10;
	const canWidth = this.drawService.can2.width;
	const canHeight = this.drawService.can2.height;


  	for(let i=0;i<this.aneNum;i++){
  		const deltaX = Math.floor((Math.random() * canWidth) + 1);
  		const deltaY = Math.floor((Math.random() * this.lengthRange) + 1);

  		this.aneArr.push({
  			id: i,
  			start: {x: startP + deltaX, y: canHeight},
  			end: {x: startP + deltaX, y: canHeight - this.aneLength + deltaY},
  			lineWidth: this.lineWidth,
  			style: this.lineStyle,
  			lineCap: this.lineCap,
  			aneAlpha: this.aneAlpha,
  		});
  	};


  }

  drawAnes(){

  }

  trackByFn(index: number, item: Ane){
  	return item.id
  }

}
