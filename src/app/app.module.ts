import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyButtonComponent } from "./my-button/my-button.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MyInputComponent } from "./my-input/my-input.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    MyInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
