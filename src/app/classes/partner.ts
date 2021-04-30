export class Partner {
  public id: number;
  public firstname: string;
  public lastname: string;
  public contactno: string;
  public email: string;
  public datetime: string;
  public referalId: string;
  public address: string;
  public partner_id: string;


  constructor(id: number, firstname: string, lastname: string, contactno: string, email: string, datetime: string,referalId: string, address: string,partner_id:string){
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.contactno = contactno;
    this.email = email;
    this.datetime = datetime;
    this.referalId = referalId;
    this.address = address;
    this.partner_id = partner_id;
  }
}
