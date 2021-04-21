import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uid;
  constructor() { 
    this.setCurrentUser(2);
  }
  setCurrentUser(uid){
    this.uid = uid
  }

  currentUser(){
    return this.uid
  }
}
