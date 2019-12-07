import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/containers/services/title.service';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/containers/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User;
  constructor(
    private titleService: TitleService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.titleService.currentLoggedInUser.subscribe(user => {
      this.currentUser = user;
    });
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
