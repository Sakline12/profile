import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermessageComponent } from './usermessage.component';

describe('UsermessageComponent', () => {
  let component: UsermessageComponent;
  let fixture: ComponentFixture<UsermessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermessageComponent]
    });
    fixture = TestBed.createComponent(UsermessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
