import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OneModule } from '@poc/one';
import { ThirdModule } from '@poc/third';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, OneModule, ThirdModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
