import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgStickyDirective } from 'ng-sticky';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { MainNavDirective } from './layout/main-nav.directive';
import { AboutComponent } from './components/about/about.component';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { TeamComponent } from './components/team/team.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClientsComponent } from './components/clients/clients.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NgStickyDirective,
    MainLayoutComponent,
    MainNavDirective,
    AboutComponent,
    WhatwedoComponent,
    FooterComponent,
    WhyChooseUsComponent,
    TeamComponent,
    ProjectsComponent,
    ClientsComponent,
    HowItWorksComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
