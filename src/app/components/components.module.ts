import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from './content/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StateModule } from '../@ngxs/state.module';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '',
        component: HomeComponent,
        outlet: 'content'
      }
    ]
  }
];


@NgModule({
  imports: [
    NgxChartsModule,
    RouterModule.forChild(routes),
    StateModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
