import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})


export class AboutUsComponent implements OnInit{

  clientsLogos = [
    "./assets/client1.png", "./assets/client2.png", "./assets/client3.png", "./assets/client1.png", 
    "./assets/client1.png", "./assets/client2.png", "./assets/client3.png", "./assets/client1.png", 
  ]

  ngOnInit(): void {
    document.getElementById("head")?.scrollIntoView({behavior:'auto'});
  }
}
