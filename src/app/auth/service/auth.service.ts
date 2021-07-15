import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public login(userInfo: User){
    localStorage.setItem('SeesionUser', JSON.stringify(userInfo));
  }

  public logout(){
    localStorage.removeItem('SeesionUser');
  }

  gettoken() {
    return !!localStorage.getItem('SeesionUser');
  }
}
