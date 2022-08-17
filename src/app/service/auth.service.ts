import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private html:HttpClient) { }

  Login(userLogin: UserLogin): Observable<UserLogin>{

    return this.html.post<UserLogin>('https://ataehpdcdc.herokuapp.com/user/login', userLogin);

  }

  Register(user:UserModel): Observable<UserModel>{

    return this.html.post<UserModel>('https://ataehpdcdc.herokuapp.com/user/register', user);

  }

  Update(user:UserModel): Observable<UserModel>{

    return this.html.put<UserModel>('https://ataehpdcdc.herokuapp.com/user/update', user);

  }

  Logged(){

    let ok = true;

    if(environment.token != ''){

      ok = false;

    }

    return ok;

  }
}
