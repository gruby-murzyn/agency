import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgStickyDirective } from 'ng-sticky';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainNavDirective } from './layout/main-nav.directive';
import { AboutComponent } from './components/about/about.component';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStickyDirective,
    MainLayoutComponent,
    MainNavDirective,
    AboutComponent,
    WhatwedoComponent,
    FooterComponent,
    WhyChooseUsComponent
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
