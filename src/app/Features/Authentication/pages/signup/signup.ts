import {Component, inject} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {Select} from 'primeng/select';
import {DatePickerModule} from 'primeng/datepicker';
import { AutoComplete } from 'primeng/autocomplete';

interface Gender {
  type: string;
}

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-signup',
  imports: [
    InputText,
    Password,
    RouterLink,
    NgClass,
    ReactiveFormsModule,
    ScrollPanelModule,
    Select,
    FormsModule,
    DatePickerModule,
    AutoComplete,
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

  genders: Gender[] | undefined;

  selectedGender: Gender | undefined;

  ngOnInit() {
    this.genders = [
      {type: 'Male'},
      {type: 'Female'},
    ];
  }

  items: any[] = [];
  value: any;

  search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(1).keys()].map(item => event.query);
  }

  //******************* Handling User Registered *******************//
  signupForm = new FormGroup({
    RegisterEmail: new FormControl(),
    RegisterPassword: new FormControl(),
    RegisterUsername: new FormControl(),
    RegisterGender: new FormControl(),
    RegisterBirthDate: new FormControl(),
    RegisterCountry: new FormControl(),
    RegisterCity: new FormControl(),
    RegisterStreet: new FormControl(),
    RegisterZipCode: new FormControl(),
  });

  onSubmit(): void {
    const email: string = this.signupForm.controls.RegisterEmail.value;
    const password: string = this.signupForm.controls.RegisterPassword.value;
    const username: string = this.signupForm.controls.RegisterUsername.value;
    const gender: string = this.signupForm.controls.RegisterGender.value.type;
    const rawDate = this.signupForm.controls.RegisterBirthDate.value;
    const country: string = this.signupForm.controls.RegisterCountry.value;
    const city: string = this.signupForm.controls.RegisterCity.value;
    const street: string = this.signupForm.controls.RegisterStreet.value;
    const zipCode: string = this.signupForm.controls.RegisterZipCode.value;

    // Format Date
    const birthDate = new Date(rawDate);
    const formattedDate = birthDate.toDateString().split('T')[0];

    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Username: ", username);
    console.log("Gender: ", gender);
    console.log("BirthDate: ", formattedDate);
    console.log("Country: ", country);
    console.log("City: ", city);
    console.log("Street: ", street);
    console.log("ZipCode: ", zipCode);
  }
}
