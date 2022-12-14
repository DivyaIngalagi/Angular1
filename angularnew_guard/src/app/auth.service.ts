import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  //this service file decide whether the user is authenticated or not
  isUserLoggedIn(){
    return false;
  }
}

