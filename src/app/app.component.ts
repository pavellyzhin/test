import { Component } from '@angular/core';
import { CalcService } from './calc.service';
import { aeroflot, rgd } from './iblock';

@Component({
     selector: 'app-root' ,
  templateUrl: './app.component.html' ,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    kolvokm: number = 0;
        age: number = 0;
  vesbagaja: number = 0;
  aero: {title:string,pred:number}[] = [];
  rjd: {title:string,pred:number}[] = [];

  constructor(private calc: CalcService, private aeroflot: aeroflot, private rgd:rgd ) {
    
  }

  calculate(){
    this.calc.age = this.age;
    this.calc.ves = this.vesbagaja;
    this.calc.km  = this.kolvokm;
   
    this.aero = [];
    this.aero.push({title:this.aeroflot.econom.title,pred:this.calc.perevozka(this.aeroflot.econom.iblock)});
    this.aero.push({title:this.aeroflot.prod.title,pred:this.calc.perevozka(this.aeroflot.prod.iblock)});
    this.aero.push({title:this.aeroflot.lux.title,pred:this.calc.perevozka(this.aeroflot.lux.iblock)});

    this.rjd = [];
    this.rjd.push({title:this.rgd.econom.title,pred:this.calc.perevozka(this.rgd.econom.iblock)});
    this.rjd.push({title:this.rgd.prod.title,pred:this.calc.perevozka(this.rgd.prod.iblock)});
    this.rjd.push({title:this.rgd.lux.title,pred:this.calc.perevozka(this.rgd.lux.iblock)});
  }
}
