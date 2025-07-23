import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';

@Component({
  selector: 'app-signin',
  imports: [
    RouterLink,
    NgClass,
    InputText,
    Password,
  ],
  templateUrl: './signin.html',
  styles: ``
})
export class Signin {
  messageIsVisible: boolean = true;

  hideMessageBox() {
    this.messageIsVisible = false;
  }
}
