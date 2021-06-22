export class Employee{
  public id: number;
  public firstname: string;
  public lastname: string;
  public contactno: string;
  public email: string;
  public datetime: string;
  public address: string;
  public emp_id: string;
  public wallet: number;


  constructor(id: number,firstname: string,lastname: string,
              contactno: string, email: string,datetime: string,
              address: string,emp_id:string,wallet:number) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.contactno = contactno;
    this.email = email;
    this.datetime = datetime;
    this.address = address;
    this.emp_id = emp_id;
    this.wallet = wallet;
  }
}
