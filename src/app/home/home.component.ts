import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  constructor(private route: ActivatedRoute) {}
  firstBtnVal="Contact us";

  myfun(){
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const counter = entry.target.querySelector('.counter');
    
        if (entry.isIntersecting) {
          counter!.classList.add('counter');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        counter!.classList.remove('counter');
      });
    });
    
    observer.observe(document.querySelector('counter')!);
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }
    });
  }

  

}
