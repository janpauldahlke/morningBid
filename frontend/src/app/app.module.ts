import { DataResolver } from './homepage/resolver/data.resolver';
import { DataHTTPService } from './homepage/services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    DataHTTPService,
    DataResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
