import { Partner } from '../classes/partner';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Wallet } from '../classes/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {redirectUrl: any;
  baseUrl:string = "http://localhost/wisteria-india/php/wallet";
  // baseUrl:string = "https://wisteriaindia.com/php/partner";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

  public addAmount(referral_id:string, amount:string ){
    return this.httpClient.post<Wallet[]>(this.baseUrl + '/addAmount.php', { referral_id, amount })
    .pipe(map(wallet => {
    return wallet;
    }));
  }
}
