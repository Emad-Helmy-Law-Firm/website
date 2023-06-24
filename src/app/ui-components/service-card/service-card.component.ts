import { FormatWidth } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() width = "200px";
  @Input() title!: String;
  @Input() body!: String;
  @Input() img!: String;
  hoverActive: boolean = false;
  style = {};

  ngOnInit() {
    // this.hoverImg = `url('assets/${this.img}')`;
    // this.noHoverImg = `url('assets/${this.img}'), #6DB3F2`;
    // this.backgroundImg = this.hoverImg;
    this.hoverActive = false;
    this.style = `linear-gradient(#00000026, #00000090), url('assets/${this.img}')`;
  }
  
  mouseEnter() {
    this.style = `linear-gradient(var(--secondaryButtonColor), var(--secondaryButtonColor)), url('assets/${this.img}')`;
  }
  
  mouseLeave() {
    this.style = `linear-gradient(#00000026, #00000090), url('assets/${this.img}')`;
  }
}
