import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.resetTimer();

    // Attach event listeners for mouse and keyboard events
    window.addEventListener('mousemove', this.resetTimer.bind(this));
    window.addEventListener('mousedown', this.resetTimer.bind(this));
    window.addEventListener('keypress', this.resetTimer.bind(this));
    window.addEventListener('touchmove', this.resetTimer.bind(this));

    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401) {
          // this.authService.logout(window.location.hostname).subscribe();
          localStorage.removeItem('token');
          //this.router.navigate(['/login']);
          this.router.navigate(['/login']).then(() => {
            window.location.reload();
          });
          // window.location.reload();
        }
        return throwError(error);
      })
    );
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    }, 300000);
  }

  private timer: any;
}
