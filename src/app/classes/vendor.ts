export class Vendor {
  public id: number;
  public cName: string;
  public fullName:string;
  public email:string;
  public contactno: number;
  public pwd:string;
  public address:string;
  public zip:string;
  public vendor_id: string;

  constructor(id:number,cName: string, fullName:string, email:string,
              contactno: number,pwd:string, address:string,
              zip:string,vendor_id: string) {
      this.id = id;
      this.cName = cName;
      this.fullName = fullName;
      this.pwd = pwd;
      this.email = email;
      this.contactno = contactno;
      this.address = address;
      this.zip = zip;
      this.vendor_id = vendor_id;
      }
}
