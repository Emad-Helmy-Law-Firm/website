import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientsCarouselComponent } from './our-clients-carousel.component';

describe('OurClientsCarouselComponent', () => {
  let component: OurClientsCarouselComponent;
  let fixture: ComponentFixture<OurClientsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurClientsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurClientsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
