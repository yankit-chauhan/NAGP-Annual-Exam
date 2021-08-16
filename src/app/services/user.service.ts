import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { IUser, UserType } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    {
      id: 1,
      username: "yankit",
      password: "12345",
      type: UserType.Admin
    },
    {
      id: 2,
      username: "rahul",
      password: "12345",
      type: UserType.Application
    }
  ];

  constructor() { }

  validateUser(user: IUser): boolean {
    let isValid: boolean = false;
    if(this.users.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase() && user.password === usr.password) > -1) {
      isValid = true;
    }
    return isValid;
  }

  isUserAdmin(user:IUser): boolean {
    return this.users.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase() && usr.type === UserType.Admin) > -1;
  }
}
