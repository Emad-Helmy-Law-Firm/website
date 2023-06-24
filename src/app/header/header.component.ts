import { Component, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentRoute="";
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.currentRoute = url.join('/');
    });
  }

  faBars=faBars;
  faCircleXmark=faCircleXmark;

  mobileMenuVisible = false;

  showMobileMenu() {
    this.mobileMenuVisible = true;
  }

  hideMobileMenu() {
    this.mobileMenuVisible = false;
  }

  navigateHome() {
    this.router.navigateByUrl('/');
  }

  navigateToSection(): void {
    if(this.currentRoute!=""){
      this.router.navigate(["/"], { fragment: 'contactUs' });
    }
    else{
      document.getElementById("contactUs")?.scrollIntoView({behavior:'smooth'});
    }
  }
}
