export class kmPrice {
       km?: number = 0;
    price?: number = 0;
}

export class bagaj {
           kg?: number = 0;
        price?: number = 0;
        minKg?: number = 0;
        maxKg?: number = 0;
    morePrice?: number = 0;
  morePriceKg?: boolean = false;
      perebor?: boolean = false;
}

export class childFor {
     age?: number = 0;
    sale?: number = 0;
    bagaj: boolean = false;
}

export class perevozka {
      kmPrice?: kmPrice = new kmPrice();
       Bagaj?: bagaj = new bagaj();
    forChild?: childFor = new childFor();
}


export class predloj {
    company: string;
    tarif: {title:string, price: number}[];
}