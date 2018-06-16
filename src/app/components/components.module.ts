import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from './content/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StateModule } from '../@ngxs/state.module';
import { MaterialModule } from '../@material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    children: [
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
    MaterialModule,
    NgxChartsModule,
    StateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
