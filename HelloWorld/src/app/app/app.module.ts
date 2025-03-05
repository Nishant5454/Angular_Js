import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     // Ensure this module exists in your project
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
