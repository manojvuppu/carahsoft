import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [BrowserModule, FormsModule,MatCardModule],
  declarations: [
    AppComponent,
    HelloComponent,
    
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
