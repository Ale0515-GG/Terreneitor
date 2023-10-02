import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministarUnidadComponent } from './administar-unidad.component';

describe('AdministarUnidadComponent', () => {
  let component: AdministarUnidadComponent;
  let fixture: ComponentFixture<AdministarUnidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministarUnidadComponent]
    });
    fixture = TestBed.createComponent(AdministarUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
