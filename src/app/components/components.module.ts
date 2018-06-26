import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from '../@material/material.module';
import { StateModule } from '../@ngxs/state.module';
import { HomeComponent } from './content/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BalancePieCardComponent } from './cards/balance.pie.card.component';

const routes: Routes = [
  {

    path: '',
    component: SidebarComponent,
    outlet: 'sidebar'
  },
  {
    path: 'test',
    component: NavbarComponent,
    outlet: 'content'
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
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    BalancePieCardComponent
  ]
})
export class ComponentsModule { }
