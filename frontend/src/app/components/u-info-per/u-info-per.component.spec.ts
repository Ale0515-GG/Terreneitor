import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UInfoPerComponent } from './u-info-per.component';

describe('UInfoPerComponent', () => {
  let component: UInfoPerComponent;
  let fixture: ComponentFixture<UInfoPerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UInfoPerComponent]
    });
    fixture = TestBed.createComponent(UInfoPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
