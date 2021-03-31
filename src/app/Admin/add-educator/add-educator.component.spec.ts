import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducatorComponent } from './add-educator.component';

describe('AddEducatorComponent', () => {
  let component: AddEducatorComponent;
  let fixture: ComponentFixture<AddEducatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEducatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEducatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
