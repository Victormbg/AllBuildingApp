import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencaPage } from './licenca.page';

describe('LicencaPage', () => {
  let component: LicencaPage;
  let fixture: ComponentFixture<LicencaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicencaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicencaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
