import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPagoscobrosComponent } from './u-pagoscobros.component';

describe('UPagoscobrosComponent', () => {
  let component: UPagoscobrosComponent;
  let fixture: ComponentFixture<UPagoscobrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UPagoscobrosComponent]
    });
    fixture = TestBed.createComponent(UPagoscobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
