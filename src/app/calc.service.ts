import { Injectable } from '@angular/core';
import { aeroflot, rgd } from './iblock';
import { bagaj, childFor, kmPrice, perevozka, predloj } from './model';

@Injectable({
  providedIn: 'root'
})

export class CalcService {

   km: number = 0;
  age: number = 0;
  ves: number = 0;

  predloj: predloj[];

  constructor() { 
   
  }

  perevozka(tarif: perevozka) {
 
    // последовательность такая:
    /*
      1. Рассчитываем стоимость расстояния
      2. Рассчитываем стоимость провоза багажа
      3. Рассчитываем стоимость возраста плюс делаем скидку

    */

    // цена километров
    let kmRub = this.kmRub(tarif.kmPrice);
   
    // цена багажа
    let vsB = this.vesBagaja(tarif.Bagaj);
   
    if(vsB >= 0) {
      let child = this.vozrast(tarif.forChild);
   
      if(child > 0) {
        if(tarif.forChild.bagaj){
          return ((kmRub + vsB) / 100) * (100 - child);
        } else {
          return ((kmRub/100) * (100 - child))  + vsB;
        }
      } else {
        return kmRub + vsB;
      }
        
      } else {
          // Если вес багажа превышает максимум тогда
          // тариф недоступен
      }
    
    // если километров 0 то и цена будет ноль
  }

  // объект из значения массива
  vesBagaja(bagaj:bagaj) {
    // если вес превышает максимальный, тогда тариф недоступен
    // если вес превышает минимальный, тогда дополнительная стоимость за кг или без кг
    // вычитаем из входных данных минимальный вес, остальное умножаем на доп стоимость
    // иначе бесплатно
     
    if((this.ves > bagaj.maxKg) && !bagaj.morePriceKg) {
      return -1;
    } else {
      if(this.ves > bagaj.minKg) {
        // идет расчет с дополнительной стоимостью
        console.log('Допстоимость багажа');
        return (bagaj.morePriceKg) ? (this.ves - bagaj.minKg) * bagaj.morePrice : bagaj.morePrice;
      } else {
        return 0;
      }
    }
  }

  // объект из значения массива
  vozrast(childFor: childFor) {
    // исходя из возраста 
    console.log('chldFor.age: ' + childFor.age);
    return (this.age < childFor.age) ? childFor.sale : 0;
  }

  kmRub(kmrub: kmPrice) {
    return this.km * kmrub.price;
  }
}
