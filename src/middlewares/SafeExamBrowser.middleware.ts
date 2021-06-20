

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class SafeExamBrowser implements CanActivate {
    constructor(
        private router: Router,
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        console.log(route.url[route.url.length - 1].path);

        if (navigator.userAgent.indexOf('SEB') == -1) {
            alert('Please reconnect via Safe Exam Browser')
            // return false; ///this would not let other browsers enter the app
        }

        return true;
    }
}