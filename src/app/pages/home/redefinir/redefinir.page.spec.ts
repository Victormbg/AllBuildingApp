import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinirPage } from './redefinir.page';

describe('RedefinirPage', () => {
  let component: RedefinirPage;
  let fixture: ComponentFixture<RedefinirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedefinirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedefinirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
