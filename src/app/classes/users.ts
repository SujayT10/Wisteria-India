export class Users {
  public Id: number;
  public firstname: string;
  public lastname: string;
  public pwd:string;
  public email:string;
  public contactno: number;
  public admin_id: string;

  constructor(Id:number,
              firstname: string,
              lastname: string,
              pwd:string,
              email:string,
              contactno: number,
              admin_id: string) {

      this.Id = Id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.pwd = pwd;
      this.email = email;
      this.contactno = contactno;
      this.admin_id = admin_id;
      }
  }
