import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private currentUser = new Subject<User>();

  get currentLoggedInUser() {
    return this.currentUser.asObservable();
  }

  setCurrentLoggedInUser(user: User) {
    this.currentUser.next(user);
  }
  constructor() { }
}
