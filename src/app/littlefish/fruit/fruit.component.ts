import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../model/fruit.model';
import { Ane } from '../../model/ane.model';
import { DrawService } from '../../service/draw.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  private num: number = 30;
  private fruit: Fruit = {
  	num: this.num,
  	fruit: Array.from({length: this.num})
  };
	private maxWid: number = 10;
	private wid :number =0;
	private ht : number = 0;
	private fruitImg: string = '/assets/img/fruit.png';
	private diePoint: number = -24; //define when to die
  constructor(private drawService: DrawService) { }

  ngOnInit() {
  	this.born();
  	this.drawService.addFunction(this.drawFruit.bind(this));
  }

  // born, grow, fly

  born(){
  	const aneArr = this.drawService.aneArr;

  	 this.fruit.fruit = this.fruit.fruit.map((item, index)=>{
  	 	const bornAneId = Math.floor((Math.random() * aneArr.length) + 0); 
  	 	const bornAne = this.drawService.aneArr[bornAneId];

  	 	const fruit = {
  			id: index,
  			position: {
  				x: bornAne.end.x,
  				y: bornAne.end.y, 
  			},
  			status: 'born',
  			flySpeed: Math.random()*1 + 0.01,
  		};

  		return fruit;

   	});
  	
  }

  reborn(bornAneId: number){
  	return this.drawService.aneArr[bornAneId].end.y;
  }

 drawFruit(){
 	const ctx = this.drawService.ctx2;
 	const img = new Image();
 	img.src = this.fruitImg;
 	const deltaTime = this.drawService.deltaTime/10000;

 	this.fruit.fruit = this.fruit.fruit.map((item,index)=>{
 		//born a fruit
 		 if((this.wid<= this.maxWid) && (item.status === 'born')) {
 		 	// console.log(`--wid ${this.wid}`);
 		 	this.wid = this.wid + deltaTime;
 		 	this.ht = this.ht + deltaTime;
 		 	// console.log(`wid --- ${this.wid}`);
 		 }else if( item.position.y < this.diePoint){
 		 	item.status = 'die';
 		 	item.position.y = this.reborn(index);
 		 }else{
 		 	item.position.y -= item.flySpeed;
 		 	item.status = 'fly';
 		 };
		 ctx.drawImage(img,item.position.x - this.wid*0.5,item.position.y - this.ht*0.5,this.wid,this.ht);
		 return {
		 	...item,
		 	position: {
		 		...item.position,
		 		y: item.position.y
		 	}
		 }
 	});
 }

}
