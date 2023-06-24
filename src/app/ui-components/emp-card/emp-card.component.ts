import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.css']
})
export class EmpCardComponent {
  @Input() imgURL="";
  @Input() empName="";
  @Input() empTitle="";
  @Input() empURL="";
  @Input() desc: string[] =[];
  @Input() isEmad = false;

  currentRoute="";
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.currentRoute = url.join('/');
    });
  }

  faCircleXmark=faCircleXmark;

  descriptionVisible = false;

  displayDescription() {
    this.descriptionVisible = !this.descriptionVisible;
  }

  navigateToEmad() {
    this.router.navigateByUrl('/emadHelmy');
  }
}
