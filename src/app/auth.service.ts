import { Injectable } from '@angular/core';
import { Observable, of, tap, delay } from 'rxjs';
  
@Injectable()
export class AuthService {
    isLoggedIn: boolean = false; 
    redirectUrl: string; 

    login(name: string, password: string): Observable<boolean> {
        let isLoggedIn = (name === 'pikachu' && password === 'pikachu');
  
        return of(isLoggedIn).pipe(
            delay(1000),
            tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
        );
    }

    logout() {
        this.isLoggedIn = false;
    }
}