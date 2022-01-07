import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';
// import { of } from 'rxjs/observable/of'
import { of } from 'rxjs';
import { throwError } from 'rxjs';
import { User } from '../models/user.model';
import { Contact } from '../models/contact.model'
const gDemoUsers = {
  _id: 'u101',
  name: "Koren Levi",
  coins: 100,
  moves: []
}
const LOGGED_USER = 'loggedinUser'
const USER = 'user'
// console.log('sdsdsd');
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _usersDb: User[]
  private _user: User


  private _user$ = new BehaviorSubject<User>(this.load(USER) || null)
  //  private f = this._print()
  public user$ = this._user$.asObservable()
  // private ff = this.signup('Koren Levi')
  // private _user$ = new BehaviorSubject<User>(null)
  // public gUsers = this.login(gDemoUsers)
  // private LOGGED_USER = 'loggedinUser'
  // private USERS = 'users'
  constructor() { }

  private _loadUsers(): void {
    var users = JSON.parse(sessionStorage.getItem(USER))
    if (!users || !users.length) users = gDemoUsers
    sessionStorage.setItem(USER, JSON.stringify(users))
    this.login(users[0]);
    return users
  }
  public signup(name: string): void {
    let user = this.load(USER);
    if (!user) {
      let newUser = new User();
      newUser.name = name;
      this.store(USER, newUser);
      this._user = newUser;
    }else{
      localStorage.removeItem('user')
      this.store('user',new User(name))
    }
    // this._user$.next(this._user);
  }
  public getUser() {
    return this.user$;
  }
  public getDemoUser(){
   return this.login(gDemoUsers)
    // return gDemoUsers
  }
  
  public login(user: User): User {
    // sessionStorage.setItem(USER, JSON.stringify(user))
    localStorage[USER] = JSON.stringify(user);
    this._user = user;
    this._user$.next(this._user);
    return user
  }
  public getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(USER))
    // var user =  
    // return Promise.resolve(user)
  }
  public store(USER: string, any: any): void {
    localStorage[USER] = JSON.stringify(any);
  }

  public load(USER: string): any {
    var str = localStorage[USER] || 'null';
    return JSON.parse(str);
  }
  public addMove(contact: Contact, amount: number) {
    const newMove = {
      toId: contact._id,
      to: contact.name,
      amount,
      at: Date.now()
    }
    const currUser = { ...this._user$.value }
    currUser.coins -= amount
    currUser.moves.unshift(newMove)
    this.store('user', currUser)
    this._user$.next(currUser)
    
  }
  
}
