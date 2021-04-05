import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CommonfunctionService } from './commonfunction.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService:AuthService,
    private router: Router,
    private CFS:CommonfunctionService
    ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var isLogedIn = false;
      // this.authService.isUserLoggedIn().then((res:boolean)=> {
      //   isLogedIn =  res
      // });
      // console.log("isLogedIn",isLogedIn);
      // if(isLogedIn){
      //   return true;
      // }
      // else{
      //   this.router.navigate(['login']);
      //   this.CFS.showToast("You to login first to visit this page!",true,'top');
      //   return false;
      // }
      return true;
  }
  
}
