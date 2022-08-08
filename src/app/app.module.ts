import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent,LandingComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
