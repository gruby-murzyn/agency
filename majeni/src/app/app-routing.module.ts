import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AboutComponent } from './components/about/about.component';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'what',
        component: WhatwedoComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contacts',
        component: FooterComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }
