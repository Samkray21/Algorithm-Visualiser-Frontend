import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { } from 'google-maps';
import { GoogleMapsComponent } from './components/gmaps/google-maps.component';
import { AlgorithmService } from './services/algorithm.service';
import { LineDrawerComponent } from './components/line-drawer/line-drawer/line-drawer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    LineDrawerComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AlgorithmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
