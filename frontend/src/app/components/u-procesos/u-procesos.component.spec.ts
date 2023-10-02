import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UProcesosComponent } from './u-procesos.component';

describe('UProcesosComponent', () => {
  let component: UProcesosComponent;
  let fixture: ComponentFixture<UProcesosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UProcesosComponent]
    });
    fixture = TestBed.createComponent(UProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
