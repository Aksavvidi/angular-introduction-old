import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyHelloComponentComponent } from './my-hello-component/my-hello-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHelloComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
