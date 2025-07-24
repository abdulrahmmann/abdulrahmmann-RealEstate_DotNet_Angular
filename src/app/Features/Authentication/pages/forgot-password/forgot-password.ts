import {Component, inject} from '@angular/core';
import {InputText} from "primeng/inputtext";
import {Router} from "@angular/router";
import {NgClass} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ScrollPanel} from 'primeng/scrollpanel';

@Component({
  selector: 'app-forgot-password',
  imports: [
    InputText,
    NgClass,
    ReactiveFormsModule,
    ScrollPanel
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
    this.router.navigate(["/user-login"]);
  }

  resetForm = new FormGroup({
    ResetEmail: new FormControl(),
  });

  onSubmit(): void {
    const email: string = this.resetForm.controls.ResetEmail.value;

    console.log("Email: ", email)
  }
}
