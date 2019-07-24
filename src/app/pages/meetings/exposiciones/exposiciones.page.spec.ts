import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposicionesPage } from './exposiciones.page';

describe('ExposicionesPage', () => {
  let component: ExposicionesPage;
  let fixture: ComponentFixture<ExposicionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposicionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
