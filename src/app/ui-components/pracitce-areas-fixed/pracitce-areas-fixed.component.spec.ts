import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracitceAreasFixedComponent } from './pracitce-areas-fixed.component';

describe('PracitceAreasFixedComponent', () => {
  let component: PracitceAreasFixedComponent;
  let fixture: ComponentFixture<PracitceAreasFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracitceAreasFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracitceAreasFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
