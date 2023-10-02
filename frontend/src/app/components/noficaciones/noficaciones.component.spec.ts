import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoficacionesComponent } from './noficaciones.component';

describe('NoficacionesComponent', () => {
  let component: NoficacionesComponent;
  let fixture: ComponentFixture<NoficacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoficacionesComponent]
    });
    fixture = TestBed.createComponent(NoficacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
