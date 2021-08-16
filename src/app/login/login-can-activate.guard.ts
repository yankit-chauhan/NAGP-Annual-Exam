import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginCanActivateGuard implements CanActivate {

  constructor(private route: Router, private _snackBar: MatSnackBar) { }

  canActivate(): boolean{
    if(localStorage.getItem('TOKEN') != null)
    {
      if(localStorage.getItem('TYPE') === "ADMINISTRATOR") {
        this.route.navigate(["/adminDashboard"]);
        this._snackBar.open('Admin Portal', 'Already Logged In', {
          duration: 4000
        });
      }
      else {
        this.route.navigate(["/applicationDashboard"]);
        this._snackBar.open('Application Portal', 'Already Logged In', {
          duration: 4000
        });
      }
      return false;
    }
    return true;
  }
  
}
