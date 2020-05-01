import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

export interface User {
  userName: string;
  userToken: string;
}

export interface AuthResponse {
  jwt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public url = 'http://markyourbook.herokuapp.com/user_token';

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(
      localStorage.getItem('currentUser')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public login(email: string, pass: string): any {
    console.warn(email, pass);
    const fromData = new FormData();
    fromData.append('[auth]email', email);
    fromData.append('[auth]password', pass);

    this.http.post(this.url, fromData).subscribe((response: AuthResponse) => {
      const currentUser: User = {
        userName : email,
        userToken : response.jwt
      };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.currentUserSubject.next(currentUser);
    });
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
