import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloDeleteComponent } from './modelo-delete.component';

describe('ModeloDeleteComponent', () => {
  let component: ModeloDeleteComponent;
  let fixture: ComponentFixture<ModeloDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
