export class VendorProducts {
  id: number;
  sku: string;
  productName: string;
  description: string;
  unitPrice: number
  imgUrl: string;
  unitInStocks: number
  vendor_id: string;
  todayDate: any;
  active: boolean;

  constructor(id:number, sku:string, productName:string,
              description:string, unitPrice:number, imgUrl:string,
              unitInStocks:number, vendor_id: string, todayDate: any, active:boolean){
      this.id = id;
      this.sku = sku;
      this.productName = productName;
      this.description = description;
      this.unitPrice = unitPrice;
      this.imgUrl = imgUrl;
      this.unitInStocks = unitInStocks;
      this.vendor_id = vendor_id;
      this.todayDate = todayDate;
      this.active = active;
  }


}
