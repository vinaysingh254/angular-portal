import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-kms-form-container',
  templateUrl: './kms-form-container.component.html',
  styleUrls: ['./kms-form-container.component.css']
})
export class KmsFormContainerComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllUser();
  }
  ngOnDestroy(){
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
  }
  private loadAllUser() {
    this.userService.getAll().subscribe(users => {
      this.users=users;
    });
  }
}
