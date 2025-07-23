import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {AuthCarousel} from '../../components/auth-carousel/auth-carousel';

@Component({
  selector: 'app-signin',
  imports: [
    RouterLink,
    NgClass,
    InputText,
    Password,
    AuthCarousel,
  ],
  templateUrl: './signin.html',
})
export class Signin {
  messageIsVisible: boolean = true;

  hideMessageBox() {
    this.messageIsVisible = false;
  }

  carouselItems = [
    {
      title: 'Manage Properties Efficiently',
      description: 'Easily organize, update, and monitor your property listings in one place. Stay in control with smart tools that streamline property management.',
      image: 'bg-auth1'
    },
    {
      title: 'Find Your Dream Home',
      description: 'Browse curated listings tailored to your lifestyle. Whether you are buying or renting, discover homes that match your needs and your heart.',
      image: 'bg-auth2'
    },
    {
      title: 'Grow Your Investments',
      description: 'Maximize returns with data-driven insights and expert-backed listings. Invest smarter and build your real estate portfolio with confidence.',
      image: 'bg-auth3'
    }
  ];
}
