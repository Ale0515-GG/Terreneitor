import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidadComponent } from './editar-unidad.component';

describe('EditarUnidadComponent', () => {
  let component: EditarUnidadComponent;
  let fixture: ComponentFixture<EditarUnidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUnidadComponent]
    });
    fixture = TestBed.createComponent(EditarUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
