import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniversariosPage } from './aniversarios.page';

describe('AniversariosPage', () => {
  let component: AniversariosPage;
  let fixture: ComponentFixture<AniversariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniversariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniversariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
