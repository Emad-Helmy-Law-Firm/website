import { Component } from '@angular/core';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  faCirclePlus = faCirclePlus;
  faCircleMinus = faCircleMinus;

  firstClicked = false;
  secClicked = false;
  thirdClicked = false;
  forthClicked = false;

  questionClicked = false;

  setClick(questNum: string) {
    this.questionClicked = false;
    if (questNum == "firstClicked") {
      this.firstClicked = !this.firstClicked;
      this.secClicked = false;
      this.thirdClicked = false;
      this.forthClicked = false;
      if(this.firstClicked) {
        this.questionClicked = true;
      }
    }
    
    if (questNum == "secClicked") {
      this.firstClicked = false;
      this.secClicked = !this.secClicked;
      this.thirdClicked = false;
      this.forthClicked = false;
      if(this.secClicked) {
        this.questionClicked = true;
      }
    }
    
    else if (questNum == "thirdClicked") {
      this.firstClicked = false;
      this.secClicked = false;
      this.thirdClicked = !this.thirdClicked;
      this.forthClicked = false;
      if(this.thirdClicked) {
        this.questionClicked = true;
      }
    }
    
    else if (questNum == "forthClicked") {
      this.firstClicked = false;
      this.secClicked = false;
      this.thirdClicked = false;
      this.forthClicked = !this.forthClicked;
      if(this.forthClicked) {
        this.questionClicked = true;
      }
    }

  }

}
