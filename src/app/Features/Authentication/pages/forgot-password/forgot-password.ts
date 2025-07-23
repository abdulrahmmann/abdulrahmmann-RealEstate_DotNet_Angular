import {Component, inject} from '@angular/core';
import {InputText} from "primeng/inputtext";
import {Router} from "@angular/router";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [
    InputText,
    NgClass
  ],
  templateUrl: './forgot-password.html',
})
export class ForgotPassword {
  private readonly router = inject(Router);

  messageIsVisible: boolean = true;

  hideMessageBox() {
    this.messageIsVisible = false;
  }

  navigateToSignin(): void {
    this.router.navigate(["/forgot-password"]);
  }
}
