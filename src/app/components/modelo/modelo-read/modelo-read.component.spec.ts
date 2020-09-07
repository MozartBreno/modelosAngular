import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloReadComponent } from './modelo-read.component';

describe('ModeloReadComponent', () => {
  let component: ModeloReadComponent;
  let fixture: ComponentFixture<ModeloReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
