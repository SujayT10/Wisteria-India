export class TelentHunt {
  public id: number;
  public name_1: string;
  public dob_1: string;
  public telent_1: string;
  public name_2: string;
  public dob_2: string;
  public telent_2: string;
  public name_3: string;
  public dob_3: string;
  public telent_3: string;
  public name_4: string;
  public dob_4: string;
  public telent_4: string;
  public name_5: string;
  public dob_5: string;
  public telent_5: string;
  
  public email: string;
  public contactno: number;
  public address: string;
  public pinCode:number;
  public transaction_id: string;
  public customer_id: string;

  constructor(id: number, name_1: string, dob_1: string, telent_1: string,
                          name_2: string, dob_2: string, telent_2: string,
                          name_3: string, dob_3: string, telent_3: string,
                          name_4: string, dob_4: string, telent_4: string,
                          name_5: string, dob_5: string, telent_5: string,
              email: string,contactno: number, address: string, pinCode:number,transaction_id: string, customer_id:string){
      this.id = id;
      this.name_1 = name_1;
      this.dob_1 = dob_1;
      this.telent_1 = telent_1;
      this.name_2 = name_2;
      this.dob_2 = dob_2;
      this.telent_2 = telent_2;
      this.name_3 = name_3;
      this.dob_3 = dob_3;
      this.telent_3 = telent_3;
      this.name_4 = name_4;
      this.dob_4 = dob_4;
      this.telent_4 = telent_4;
      this.name_5 = name_5;
      this.dob_5 = dob_5;
      this.telent_5 = telent_5;
      this.email = email;
      this.address = address;
      this.contactno = contactno;
      this.pinCode = pinCode;
      this.transaction_id = transaction_id;
      this.customer_id = customer_id;
  }
}
