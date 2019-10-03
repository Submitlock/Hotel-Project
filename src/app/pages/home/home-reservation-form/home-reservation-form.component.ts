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

  private reservation = {
    checkInDate: new Date(),
    checkOutDate: this.getNextDay( new Date() ),
    guests: 1
  };

  private dateInputs = {
    checkInDate: null,
    checkOutDate: null
  }
  
  ngOnInit() {
  }

  private onSubmit(form: NgForm): void {
    console.log('First', this.reservation);
    this.dateInputs.checkOutDate = this.dateInputs.checkInDate;
    console.log('Second', this.reservation);
  }

  private dateSelected(type: string): void {
    switch (type) {
      case 'check-in':
        this.reservation.checkInDate = this.dateInputs.checkInDate ? new Date(this.dateInputs.checkInDate) : new Date();
        if (this.reservation.checkInDate > this.reservation.checkOutDate) {
          this.reservation.checkOutDate = this.getNextDay(this.reservation.checkInDate);
        }
        break;
      case 'check-out':
        this.reservation.checkOutDate = this.dateInputs.checkOutDate ? new Date(this.dateInputs.checkOutDate) : this.getNextDay(this.reservation.checkInDate);
        break;
    }
  }

  private openCheckIn(event: Event): void {
    const clickOnCalendar = (event.target as HTMLElement).tagName !== 'BUTTON';
    if (clickOnCalendar) {
      this.checkOutInput.api.close();
      this.checkInInput.api.open();
    }
  }

  private openCheckOut(event: Event): void {
    const clickOnCalendar = (event.target as HTMLElement).tagName !== 'BUTTON';
    if (clickOnCalendar) {
      this.checkInInput.api.close();
      this.checkOutInput.api.open();
    }
  }

  private addGuest(): void {
    this.reservation.guests++;
  }

  private removeGuest(): void {
    if (this.reservation.guests > 1) {
      this.reservation.guests--;
    }
  }

  private getNextDay(day: Date): Date {
    const nextDay = new Date();
    nextDay.setDate(day.getDate() + 1);
    return nextDay;
  }
}

