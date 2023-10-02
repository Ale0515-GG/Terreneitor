import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDocumentosComponent } from './u-documentos.component';

describe('UDocumentosComponent', () => {
  let component: UDocumentosComponent;
  let fixture: ComponentFixture<UDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UDocumentosComponent]
    });
    fixture = TestBed.createComponent(UDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
