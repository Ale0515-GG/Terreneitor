import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLocalizacionComponent } from './btn-localizacion.component';

describe('BtnLocalizacionComponent', () => {
  let component: BtnLocalizacionComponent;
  let fixture: ComponentFixture<BtnLocalizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnLocalizacionComponent]
    });
    fixture = TestBed.createComponent(BtnLocalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
