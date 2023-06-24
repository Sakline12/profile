import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if token exists
    const token = localStorage.getItem('token');
    if (token) {
      // Token exists, allow navigation
      return true;
    }

    // No token found, redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
