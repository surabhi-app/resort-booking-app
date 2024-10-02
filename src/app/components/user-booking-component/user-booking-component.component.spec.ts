import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingComponentComponent } from './user-booking-component.component';

describe('UserBookingComponentComponent', () => {
  let component: UserBookingComponentComponent;
  let fixture: ComponentFixture<UserBookingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBookingComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
