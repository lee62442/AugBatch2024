import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../shared/models/login';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject = new BehaviorSubject<User>({} as User); //setter
  public currentUser = this.currentUserSubject.asObservable(); //getter

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable(); //special observable

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  // API calls should be made in service
  login(userLogin: Login): Observable<boolean> {
    // take email/password from login component html and post it to api/account/login
    // if 200 ok, email/pw is correct, get JWT Token from API
    // store the token in local storage
    // return true

    return this.http
      .post(`${environment.baseUrl}account/login`, userLogin)
      .pipe(
        map((response: any) => {
          if (response) {
            // save the reponse / JWT token to local storage
            localStorage.setItem('token', response.token);

            // create the observables so that other components can get notification when user successfully login
            // Any components can subscribe to this observables to get the notification
            this.populateUserInfo();

            return true;
          }
          return false;
        })
      );
  }

  logout() {
    // remove token
    localStorage.removeItem('token');

    //reset the observables to initial values
    this.currentUserSubject.next({} as User);
    this.isLoggedInSubject.next(false);    
  }

  register() {
    // take user registration info model
    // post to api/account
    // http.post("https://localhost:7091/api/account/register")
    // if success redirect to login page
  }

  populateUserInfo() {
    // get token from local storage
    var token = localStorage.getItem('token');

    // decode token -> only when token is not empty and not expired
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // and get the info, put it inside user subject
      const decodedToken = this.jwtHelper.decodeToken(token);

      // set current user data into Observable
      this.currentUserSubject.next(decodedToken);

      // set is Authenticated data into Observable
      this.isLoggedInSubject.next(true);
    }
  }
}
