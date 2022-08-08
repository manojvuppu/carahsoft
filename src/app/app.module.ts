import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MpServiceService } from './mp-service.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [BrowserModule, FormsModule,MatCardModule],
  declarations: [
    AppComponent,
    HelloComponent,
    
  ],
  bootstrap: [AppComponent],
  providers: [MpServiceService],
})
export class AppModule {}
