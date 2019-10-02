import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel-project';
  datePicker: Date;

  onClick() {
    if (this.datePicker) {
      console.log( new Date(this.datePicker) );
    } else {
      console.log('Empty');
    }
  }
}
