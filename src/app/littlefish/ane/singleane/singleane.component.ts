import { Component, OnInit, Input } from '@angular/core';

import { DrawService } from '../../../service/draw.service';
import { Ane } from '../../../model/ane.model';

@Component({
  selector: 'app-singleane',
  templateUrl: './singleane.component.html',
  styleUrls: ['./singleane.component.css']
})
export class SingleaneComponent implements OnInit {

@Input()
aneVal: Ane; 


  constructor(private drawService: DrawService) { }

  ngOnInit() {
  	this.drawService.addFunction(this.drawAne.bind(this));
  }

  drawAne(){
  	const ctx = this.drawService.ctx2;
    ctx.save();
    ctx.globalAlpha = this.aneVal.aneAlpha;

  	ctx.beginPath();
  	ctx.moveTo(this.aneVal.start.x, this.aneVal.start.y);
  	ctx.lineTo(this.aneVal.end.x,this.aneVal.end.y);
  	ctx.lineWidth = this.aneVal.lineWidth;
  	ctx.lineCap = this.aneVal.lineCap;
  	ctx.strokeStyle = this.aneVal.style;
  	ctx.stroke();

    ctx.restore();
  }

}
