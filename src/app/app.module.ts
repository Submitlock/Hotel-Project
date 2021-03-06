import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { HomeReservationFormComponent } from './shared/home-reservation-form/home-reservation-form.component';
import { TransformDatePipe } from './pipes/transform-date.pipe';
import { HomeRoomsComponent } from './pages/home/home-rooms/home-rooms.component';
import { RoomCardSmallComponent } from './shared/room-card-small/room-card-small.component';
import { RoomThumbnailComponent } from './shared/room-thumbnail/room-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavMenuComponent,
    HomeReservationFormComponent,
    TransformDatePipe,
    HomeRoomsComponent,
    RoomCardSmallComponent,
    RoomThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    DpDatePickerModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Template: http://www.nicdarkthemes.com/themes/resort/wp/demo/apartment/
// Font Awesome: https://www.npmjs.com/package/angular-font-awesome;
// DatePicker: https://www.npmjs.com/package/ng2-date-picker;
