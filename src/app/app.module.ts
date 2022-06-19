import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoverrDirective } from './hoverr.directive';
import { MultipleDirective } from './multiple.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverrDirective,
    MultipleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
