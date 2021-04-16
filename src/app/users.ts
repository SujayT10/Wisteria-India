export class Users {
  public Id: number;
  public name: string;
  public lastname: string;
  public pwd:string;
  public email:string;
  public contactno: number;

  constructor(Id:number,
              name: string,
              lastname: string,
              pwd:string,
              email:string,
              contactno: number) {
                
      this.Id = Id;
      this.name = name;
      this.lastname = lastname;
      this.pwd = pwd;
      this.email = email;
      this.contactno = contactno;
      }
  }
