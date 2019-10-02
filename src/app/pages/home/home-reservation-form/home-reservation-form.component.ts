import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DatePickerComponent} from 'ng2-date-picker';

@Component({
  selector: 'app-home-reservation-form',
  templateUrl: './home-reservation-form.component.html',
  styleUrls: ['./home-reservation-form.component.scss']
})
export class HomeReservationFormComponent implements OnInit {

  constructor() { }

  @ViewChild('checkIn', {static: false}) checkInInput: DatePickerComponent;
  @ViewChild('checkOut', {static: false}) checkOutInput: DatePickerComponent;
  guests = 1;
  reservation = {
    checkInDate: null,
    checkOutDate: null,
  };
  displayDate = {
    checkInDay: new Date(),
    checkOutDay: this.getNextDay()
  };

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.reservation);
  }

  dateSelected(type: string) {
    switch (type) {
      case 'check-in':
        this.displayDate.checkInDay = new Date(this.reservation.checkInDate);
        break;
      case 'check-out':
        this.displayDate.checkOutDay = new Date(this.reservation.checkOutDate);
        break;
    }
  }

  openCheckIn(event: Event) {
    const clickOnCalendar = (event.target as HTMLElement).tagName !== 'BUTTON';
    if (clickOnCalendar) {
      this.checkInInput.api.open();
    }
  }
  openCheckOut(event: Event) {
    const clickOnCalendar = (event.target as HTMLElement).tagName !== 'BUTTON';
    if (clickOnCalendar) {
      this.checkOutInput.api.open();
    }
  }
  addGuest() {
    this.guests++;
  }
  removeGuest() {
    if (this.guests > 1) {
      this.guests--;
    }
  }
  private getNextDay(): Date {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
  }
}

