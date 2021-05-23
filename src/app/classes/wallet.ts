export class Wallet {
  public id: string;
  public referral_id: string;
  public amount: string;

  constructor(id: string, referral_id: string, amount: string){
    this.id = id;
    this.referral_id = referral_id;
    this.amount = amount;
  }
}
