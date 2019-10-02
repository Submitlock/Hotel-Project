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

  @ViewChild('checkIn', {static: false}) checkInDate: DatePickerComponent;
  @ViewChild('checkOut', {static: false}) checkOutDate: DatePickerComponent;
  guests: number = 1;

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    console.log(form);
  }

  openCheckIn(event: Event) {
    const clickOnCalendar = (event.target as HTMLElement).tagName != 'BUTTON';
    if (clickOnCalendar) {
      this.checkInDate.api.open();
    }
  }
  openCheckOut() {
    const clickOnCalendar = (event.target as HTMLElement).tagName != 'BUTTON';
    if (clickOnCalendar) {
      this.checkOutDate.api.open();
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
}
