import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmadProfileComponent } from './emad-profile.component';

describe('EmadProfileComponent', () => {
  let component: EmadProfileComponent;
  let fixture: ComponentFixture<EmadProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmadProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
