import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EagerComponent } from "./eager.component";
import { LazyComponent } from "./lazy.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent,
    // Eager loading
     LazyComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
