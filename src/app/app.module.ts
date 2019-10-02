import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { HomeReservationFormComponent } from './pages/home/home-reservation-form/home-reservation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavMenuComponent,
    HomeReservationFormComponent,
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
