export class Profiledata {
 public id: number;
 public referal_id: string;
 public fullname: string;
 public panNumber:string;
 public accNumber: number;
 public bankName: string
 public ifscCode: string;

 constructor(id: number, referal_id: string,fullname:string, panNumber: string, accNumber: number, bankName: string, ifscCode: string){
  this.id = id;
  this.referal_id = referal_id;
  this.fullname = fullname;
  this.panNumber = panNumber;
  this.accNumber = accNumber;
  this.bankName = bankName;
  this.ifscCode = ifscCode;
 }
}
