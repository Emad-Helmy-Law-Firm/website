import { Component } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-emad-profile',
  templateUrl: './emad-profile.component.html',
  styleUrls: ['./emad-profile.component.css']
})
export class EmadProfileComponent {
  faPhone=faPhone;
  faEnvelope=faEnvelope;

  callEmad() {
    window.location.href="tel:+201224661050";
  }

  emailEmad() {
    window.location.href="mailto:emad@emadlawfirm.com"
  }
}
