import { bagaj, childFor, kmPrice, perevozka } from "./model";

export class aeroflot {
      econom?: { title?: string, iblock?: perevozka } = {title:'', iblock: new perevozka()};
        prod?: { title?: string, iblock?: perevozka } = {title:'', iblock: new perevozka()};
         lux?: { title?: string, iblock?: perevozka } = {title:'', iblock: new perevozka()};

    constructor() {
        this.econom.title = 'Эконом';
        this.econom.iblock.kmPrice.km    = 1;
        this.econom.iblock.kmPrice.price = 4;
        this.econom.iblock.Bagaj.minKg   = 5;
        this.econom.iblock.Bagaj.maxKg   = 20;
        this.econom.iblock.Bagaj.morePrice   = 4000;
        this.econom.iblock.Bagaj.morePriceKg = false;

        this.prod.title = 'Продвинутый';
        this.prod.iblock.kmPrice.km    = 1;
        this.prod.iblock.kmPrice.price = 8;
        this.prod.iblock.Bagaj.minKg   = 20;
        this.prod.iblock.Bagaj.maxKg   = 50;
        this.prod.iblock.Bagaj.morePrice   = 5000;
        this.prod.iblock.forChild.age  = 7;
        this.prod.iblock.forChild.sale = 30;
        this.prod.iblock.Bagaj.morePriceKg = false;

        this.lux.title = 'Люкс';
        this.lux.iblock.kmPrice.km        = 1;
        this.lux.iblock.kmPrice.price     = 15;
        this.lux.iblock.Bagaj.price       = 0;
        this.lux.iblock.Bagaj.maxKg       = 50;
        this.lux.iblock.forChild.age      = 16;
        this.lux.iblock.forChild.sale     = 30;
        this.lux.iblock.Bagaj.morePriceKg = false;
    }
}


export class rgd{
    
    econom?: { title?: string, iblock?: perevozka } = {title:'', iblock: new perevozka()};
      prod?: { title?: string, iblock?: perevozka } = {title:'', iblock: new perevozka()};
       lux?: { title?: string, iblock?: perevozka }= {title:'', iblock: new perevozka()};
    
    constructor() {
        this.econom.title = 'Эконом';
        this.econom.iblock.kmPrice.km    = 1;
        this.econom.iblock.kmPrice.price = 0.5;
        this.econom.iblock.Bagaj.minKg   = 15;
        this.econom.iblock.Bagaj.maxKg   = 15;
        this.econom.iblock.Bagaj.morePrice = 50;
        this.econom.iblock.Bagaj.morePriceKg = true;
        this.econom.iblock.forChild.age    = 5;
        this.econom.iblock.forChild.sale   = 50;
       

        this.prod.title = 'Продвинутый';
        this.prod.iblock.kmPrice.km    = 1;
        this.prod.iblock.kmPrice.price = 8;
        this.prod.iblock.Bagaj.minKg   = 20;
        this.prod.iblock.Bagaj.maxKg   = 60;
        this.prod.iblock.Bagaj.morePrice   = 5000;
        this.prod.iblock.forChild.age  = 8;
        this.prod.iblock.forChild.sale = 30;
        this.prod.iblock.Bagaj.morePriceKg = true;

        this.lux.title = 'Люкс';
        this.lux.iblock.kmPrice.km    = 1;
        this.lux.iblock.kmPrice.price = 15;
        this.lux.iblock.Bagaj.price   = 0;
        this.lux.iblock.Bagaj.morePrice = 0;
        this.lux.iblock.Bagaj.maxKg   = 50;
        this.lux.iblock.forChild.age  = 16;
        this.lux.iblock.forChild.sale = 20;
        this.lux.iblock.Bagaj.morePriceKg = true;
    }
}