import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  user!: User;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(res => this.user = res);
    this.authService.isLoggedIn.subscribe(res => this.isLoggedIn = res);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('account/login');
  }
}
