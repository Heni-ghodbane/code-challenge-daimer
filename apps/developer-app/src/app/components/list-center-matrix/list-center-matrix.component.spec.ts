import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCenterMatrixComponent } from './list-center-matrix.component';

describe('ListCenterMatrixComponent', () => {
  let component: ListCenterMatrixComponent;
  let fixture: ComponentFixture<ListCenterMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCenterMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCenterMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
