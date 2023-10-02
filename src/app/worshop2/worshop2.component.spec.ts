import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Worshop2Component } from './worshop2.component';

describe('Worshop2Component', () => {
  let component: Worshop2Component;
  let fixture: ComponentFixture<Worshop2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Worshop2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Worshop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
