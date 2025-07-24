import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-signin',
  imports: [
    RouterLink,
    NgClass,
    InputText,
    Password,
    ReactiveFormsModule,
    FormsModule,
    ScrollPanelModule
  ],
  templateUrl: './signin.html',
})
export class Signin {
  private readonly router = inject(Router);

  messageIsVisible: boolean = true;

  hideMessageBox() {
    this.messageIsVisible = false;
  }

  navigateToSignUp(): void {
    this.router.navigate(["/user-register"]);
  }

  signinForm = new FormGroup({
    LoginEmail: new FormControl(),
    LoginPassword: new FormControl(),
  });

  onSubmit() {
    const email: string = this.signinForm.controls.LoginEmail.value;
    const password: string = this.signinForm.controls.LoginPassword.value;

    console.log("Email: ", email);
    console.log("Password: ", password);
  }
}
