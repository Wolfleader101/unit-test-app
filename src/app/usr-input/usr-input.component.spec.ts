import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrInputComponent } from './usr-input.component';

describe('UsrInputComponent', () => {
  let component: UsrInputComponent;
  let fixture: ComponentFixture<UsrInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
