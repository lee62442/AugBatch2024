import { Component } from '@angular/core';
import { Login } from '../../shared/models/login';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// Module based Application <app.module.cs>
// standalone components

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userLogin: Login = {
    email: '123@123.com',
    password: '12345',
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  loginSubmit(form: NgForm) {
    // capture the email/pw from UI/View
    // then send the model to Authenticaiton Service
    console.log('login button clicked');
    console.log(this.userLogin);
    console.log(form);

    this.authService.login(this.userLogin).subscribe(
      // if token is saved successfully, redirect to home page -> /home
      // else, show error message, stay the same page

      // ActivateRoute VS Router
      // AR -> to READ from URL
      // Router -> to SEND to URL
      (response) => {
        if (response) {
          this.router.navigateByUrl('/');
        } else
          (err: HttpErrorResponse) => {
            console.log(err);
          };
      }
    );
  }
}
