import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from '../@material/material.module';
import { StateModule } from '../@ngxs/state.module';
import { HomeComponent } from './content/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {

    path: '',
    component: SidebarComponent,
    outlet: 'sidebar'
  },
  {
    path: 'home',
    outlet: 'content',
    component: HomeComponent
  },
  {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar'
  }


];


@NgModule({
  imports: [
    MaterialModule,
    NgxChartsModule,
    StateModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
