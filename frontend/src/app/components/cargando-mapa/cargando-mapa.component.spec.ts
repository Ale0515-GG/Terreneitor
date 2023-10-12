import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargandoMapaComponent } from './cargando-mapa.component';

describe('CargandoMapaComponent', () => {
  let component: CargandoMapaComponent;
  let fixture: ComponentFixture<CargandoMapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargandoMapaComponent]
    });
    fixture = TestBed.createComponent(CargandoMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
