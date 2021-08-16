import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('TOKEN') !== null)
    {
      this.username = 'Log out | ' + localStorage.getItem('USERNAME');
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.route.navigate(['/dashboard']);
  }

  login() {
    this.route.navigate(['/login']);
  }
}
