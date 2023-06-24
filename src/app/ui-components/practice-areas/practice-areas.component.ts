import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.css']
})
export class PracticeAreasComponent {
  constructor(private router: Router) {}
  navigate(index: number) {
    this.router.navigate(['/services', index]);
  }
}
