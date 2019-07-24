import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiacionesPage } from './premiaciones.page';

describe('PremiacionesPage', () => {
  let component: PremiacionesPage;
  let fixture: ComponentFixture<PremiacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
