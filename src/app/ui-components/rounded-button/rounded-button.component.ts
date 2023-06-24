import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css']
})
export class RoundedButtonComponent {

  constructor(private route: Router) { }

  @Input() buttonTitle="";
  @Input() pageOfNavigation="";
  @Input() buttonType="bright";
  @Input() isContactUs=false;
  @Input() width='15vw';

  navigate(){
    this.route.navigateByUrl(this.pageOfNavigation);
  }

}
