import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable} from 'rxjs';
import { of } from 'rxjs';


import { AuthService } from './core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loginStatus: boolean;

  constructor(private authService: AuthService, private router: Router){
  }
  canActivate():Observable<boolean>{
    
    this.authService.user.subscribe(user =>{
      if(user && user.uid){
        console.log("User logged in")
        console.log(user.uid);
        this.loginStatus = true;
      }else{
        console.log("User not logged in")
        this.router.navigate(["/user/login"]);
        this.loginStatus = false;
      }

    })
    return of(this.loginStatus)
  }
}
