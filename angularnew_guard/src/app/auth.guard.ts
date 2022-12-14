import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService){}
  canActivate(){
    //whether the requested route should be activated or not
    if(this.authService.isUserLoggedIn()){
      return true;
    }else{
      window.alert('Permission denied for this page');
      return false;
    } 
  }
  
}