import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlenariasPage } from './plenarias.page';

describe('PlenariasPage', () => {
  let component: PlenariasPage;
  let fixture: ComponentFixture<PlenariasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlenariasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlenariasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
