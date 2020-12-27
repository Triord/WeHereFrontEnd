import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodageComponent } from './encodage.component';

describe('EncodageComponent', () => {
  let component: EncodageComponent;
  let fixture: ComponentFixture<EncodageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncodageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncodageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
