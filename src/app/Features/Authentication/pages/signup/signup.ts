import {Component, inject} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-signup',
  imports: [
    InputText,
    Password,
    RouterLink,
    NgClass,
    ReactiveFormsModule,
    ScrollPanelModule
  ],
  templateUrl: './signup.html',
})
export class Signup {
  private readonly router = inject(Router);

  messageIsVisible: boolean = true;

  hideMessageBox() {
    this.messageIsVisible = false;
  }

  navigateToSignIn(): void {
    this.router.navigate(["/user-login"]);
  }

  signupForm = new FormGroup({
    RegisterEmail: new FormControl(),
    RegisterPassword: new FormControl(),
    RegisterUsername: new FormControl(),
  });

  onSubmit(): void {
    const email: string= this.signupForm.controls.RegisterEmail.value;
    const password: string= this.signupForm.controls.RegisterPassword.value;
    const username: string= this.signupForm.controls.RegisterUsername.value;

    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Username: ", username);
  }
}
