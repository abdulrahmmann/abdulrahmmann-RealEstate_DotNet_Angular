import {Component, inject} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [
    InputText,
    Password,
    RouterLink,
    NgClass
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
}
