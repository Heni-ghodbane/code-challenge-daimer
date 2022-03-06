import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCenterMatrixComponent } from './create-center-matrix.component';

describe('CreateCenterMatrixComponent', () => {
  let component: CreateCenterMatrixComponent;
  let fixture: ComponentFixture<CreateCenterMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCenterMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCenterMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
