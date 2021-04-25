export class Partner {
  public id: number;
  public firstname: string;
  public lastname: string;
  public contactno: string;
  public email: string;
  public role: string;
  public datetime: string;


  constructor(id: number, firstname: string, lastname: string, contactno: string, email: string, role: string, datetime: string){
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.contactno = contactno;
    this.email = email;
    this.role = role;
    this.datetime = datetime;
  }
}
