import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitComponentComponent } from './list-produit-component.component';

describe('ListProduitComponentComponent', () => {
  let component: ListProduitComponentComponent;
  let fixture: ComponentFixture<ListProduitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProduitComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProduitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
