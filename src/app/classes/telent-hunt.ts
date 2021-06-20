export class TelentHunt {
  public id: number;
  public name: string;
  public dob: string;
  public hobbie: string;
  public name2: string;
  public dob2: string;
  public hobbie2: string;
  public name3: string;
  public dob3: string;
  public hobbie3: string;
  public name4: string;
  public dob4: string;
  public hobbie4: string;
  public name5: string;
  public dob5: string;
  public hobbie5: string;

  public email: string;
  public contactno: number;
  public address: string;
  public pinCode:number;
  public transaction_id: string;

  constructor(id: number, name: string, dob: string, hobbie: string,
                          name2: string, dob2: string, hobbie2: string,
                          name3: string, dob3: string, hobbie3: string,
                          name4: string, dob4: string, hobbie4: string,
                          name5: string, dob5: string, hobbie5: string,
              email: string,contactno: number, address: string, pinCode:number,transaction_id: string){
      this.id = id;
      this.name = name;
      this.dob = dob;
      this.hobbie = hobbie;
      this.name2 = name2;
      this.dob2 = dob2;
      this.hobbie2 = hobbie2;
      this.name3 = name3;
      this.dob3 = dob3;
      this.hobbie3 = hobbie3;
      this.name4 = name4;
      this.dob4 = dob4;
      this.hobbie4 = hobbie4;
      this.name5 = name5;
      this.dob5 = dob5;
      this.hobbie5 = hobbie5;
      this.email = email;
      this.address = address;
      this.contactno = contactno;
      this.pinCode = pinCode;
      this.transaction_id = transaction_id;
  }
}
