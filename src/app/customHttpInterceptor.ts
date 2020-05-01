import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './shared/services/authentication.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser: User = JSON.parse(
      localStorage.getItem('currentUser')
    );

    console.log(currentUser.userToken);

    if(!currentUser) {
      return next.handle(req);
    }

    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${currentUser.userToken}`),
    });

    return next.handle(newReq);
  }

}
