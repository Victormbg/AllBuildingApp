import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDestaquePage } from './pagina-destaque.page';

describe('PaginaDestaquePage', () => {
  let component: PaginaDestaquePage;
  let fixture: ComponentFixture<PaginaDestaquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDestaquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDestaquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
