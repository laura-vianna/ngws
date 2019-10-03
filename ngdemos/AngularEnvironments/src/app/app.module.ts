import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyappComponent]
})
export class AppModule { }
