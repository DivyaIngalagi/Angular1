import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TtClassDirective } from './tt-class.directive';
import { TtIfDirective } from './tt-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    TtClassDirective,
    TtIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
