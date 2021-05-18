export class Employee{
  public id: number;
  public firstname: string;
  public lastname: string;
  public contactno: string;
  public email: string;
  public datetime: string;
  public address: string;
  public emp_Id: string;


  constructor(id: number,
              firstname: string,
              lastname: string,
              contactno: string,
              email: string,
              datetime: string,
              address: string,
              emp_Id:string){
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.contactno = contactno;
    this.email = email;
    this.datetime = datetime;
    this.address = address;
    this.emp_Id = emp_Id;
  }
}
