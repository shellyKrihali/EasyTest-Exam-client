import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private cookieServise: CookieService) { }


    canActivate(route: ActivatedRouteSnapshot) {
        const token = this.cookieServise.get("token");

        if (token)
            return true;

        this.router.navigate(['/login']);
        return false;
    }
}