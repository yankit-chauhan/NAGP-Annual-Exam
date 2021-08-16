import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IUser, UserType } from '../models/IUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle: string = 'Login';
  loginForm: FormGroup;
  hide = true;

  constructor(public fb: FormBuilder, private route: Router, private _snackBar: MatSnackBar, private userService: UserService) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getUsernameErrorMessage() {
    return this.loginForm.get('username')?.hasError('required') ? 'Please Enter Username.' : '';
  }
  
  getPasswordErrorMessage() {
    return this.loginForm.get('password')?.hasError('required') ? 'Please Enter Password.' : '';
  }

  ngOnInit(): void {
  }

  login(form: IUser) {
    if(this.userService.validateUser(form)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('USERNAME', form.username);

      if(this.userService.isUserAdmin(form)) {
        localStorage.setItem('TYPE', UserType.Admin);
        this.route.navigate(['/adminDashboard']);
      }
      else{
        localStorage.setItem('TYPE', UserType.Application);
        this.route.navigate(['/applicationDashboard']);
      }

      this._snackBar.open('Hospital App', 'Logged in Successfully', {
        duration: 4000
      });
    }
    else {
      this._snackBar.open('Hospital App', 'Please Enter Valid Credentials', {
        duration: 4000
      });
    }
  }

}
