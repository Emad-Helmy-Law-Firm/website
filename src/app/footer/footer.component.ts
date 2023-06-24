import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  services = [
    "Litigation", "Real Estate", "Civil Law", "Intellectual Property", "Administrative Law", "Labor Law", "Contractual Agreements"
  ];
}
