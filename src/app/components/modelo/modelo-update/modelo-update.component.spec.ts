import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloUpdateComponent } from './modelo-update.component';

describe('ModeloUpdateComponent', () => {
  let component: ModeloUpdateComponent;
  let fixture: ComponentFixture<ModeloUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
