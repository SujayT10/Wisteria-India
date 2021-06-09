export class UpdatePartnerProfile {
  public fullname: string;
  public m_DOB: number;
  public nominee: string;
  public relation: string;
  public n_DOB: number;
  public childName1: string;
  public c1_DOB: number;
  public childName2:string;
  public c2_DOB: number;
  public gf_name: string;
  public gf_DOB: number;
  public gm_name: string;
  public gm_DOB: number;
  public panNumber: string;
  public accNumber: string;
  public bankName: string;
  public ifscCode: string;
  public eContactNo: number;

  constructor(fullname: string, m_DOB: number, nominee: string, relation: string, n_DOB: number, childName1: string,
              c1_DOB:number, childName2: string, c2_DOB:number, gf_name: string, gf_DOB: number,gm_name: string, gm_DOB: number,
              panNumber: string, accNumber: string, bankName:string, ifscCode: string,eContactNo:number){
      this.fullname = fullname;
      this.m_DOB = m_DOB;
      this.nominee = nominee;
      this.relation = relation;
      this.n_DOB = n_DOB;
      this.childName1 = childName1;
      this.c1_DOB = c1_DOB;
      this.childName2 = childName2;
      this.c2_DOB = c2_DOB;
      this.gf_name = gf_name;
      this.gf_DOB = gf_DOB;
      this.gm_name = gm_name;
      this.gm_DOB = gm_DOB;
      this.panNumber = panNumber;
      this.accNumber = accNumber;
      this.bankName = bankName;
      this.ifscCode = ifscCode;
      this.eContactNo = eContactNo;

    }

}

