import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgStickyDirective } from 'ng-sticky';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainNavDirective } from './layout/main-nav.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStickyDirective,
    MainLayoutComponent,
    MainNavDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
