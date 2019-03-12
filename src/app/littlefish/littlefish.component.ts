import { Component, OnInit,ElementRef } from '@angular/core';
import { DrawService } from '../service/draw.service';

@Component({
  selector: 'app-littlefish',
  templateUrl: './littlefish.component.html',
  styleUrls: ['./littlefish.component.css']
})
export class LittlefishComponent implements OnInit {

  private can1;
  private can2;
  private ctx1;
  private ctx2;
  private canWid;
  private canHt;
  private bgimg;


  constructor(
  	private elementRef: ElementRef,
  	private drawService: DrawService
  	) { }

  ngOnInit() {
  	this.init();	
  	// this.gameloop();
  	this.drawService.gameLoop();

   	this.drawService.addFunction(this.drawBg.bind(this));

  }


  init(){
  	 this.drawService.can1 = this.can1 = this.elementRef.nativeElement.querySelector('#canvas1'); //fish, scrore, dust
	 this.drawService.can2 = this.can2 = this.elementRef.nativeElement.querySelector('#canvas2'); //background, fruit, grass
     this.drawService.ctx1 = this.ctx1 = this.can1.getContext('2d');
     this.drawService.ctx2 = this.ctx2 = this.can2.getContext('2d');

     this.drawService.bgimg = this.bgimg =  new Image();
     this.bgimg.src = '/assets/img/background.jpg';
     
     this.canWid = this.can1.width;
     this.canHt = this.can1.height;
  }

  drawBg(){
	 this.ctx2.drawImage(this.bgimg, 0, 0, this.canWid, this.canHt)
  }

}
