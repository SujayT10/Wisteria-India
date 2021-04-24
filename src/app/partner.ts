export class Partner {
  public id: number;
  public firstname: string;
  public lastname: string;
  public contactno: string;
  public email: string;

  constructor(id: number, firstname: string, lastname: string, contactno: string, email: string){
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.contactno = contactno;
    this.email = email;
  }
}
