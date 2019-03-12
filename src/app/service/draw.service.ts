import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ane } from '../model/ane.model';

@Injectable()
export class DrawService {
  public can1;
  public can2;
  public ctx1;
  public ctx2;
  public bgimg;	

  public aneArr: Ane[];

  public lastTime;
  public  deltaTime;  //use to smooth control game movement
  // get the time gap betweent two frames = now - lastTime

  private functionArr: Function[] = [];

  constructor() {
  }

  gameLoop(){
	 this.lastTime = Date.now();

  	const Loop = ()=>{
	  	window.requestAnimationFrame(Loop);	
		this.deltaTime = Date.now() - this.lastTime;
		this.lastTime = Date.now();
		this.functionArr.map(func=>{
			func();
		})
  	};
  	Loop();


  }

  addFunction(func){
  	this.functionArr.push(func);
  }

}
