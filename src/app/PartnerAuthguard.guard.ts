import { PartnerService } from 'src/app/services/partner.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Injectable({
providedIn: 'root'
})

export class PartnerAuthguardGuard implements CanActivate {
    constructor(private partnerService: PartnerService,private router: Router ) {}
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      const routeurl: string = state.url;
      return this.isLogin(routeurl);
      }

    isLogin(routeurl: string) {
      if (this.partnerService.isLoggedIn()) {
        return true;
      }

      this.partnerService.redirectUrl = routeurl;
      this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
    }
}
