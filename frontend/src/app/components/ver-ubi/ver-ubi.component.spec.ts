import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUbiComponent } from './ver-ubi.component';

describe('VerUbiComponent', () => {
  let component: VerUbiComponent;
  let fixture: ComponentFixture<VerUbiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerUbiComponent]
    });
    fixture = TestBed.createComponent(VerUbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
