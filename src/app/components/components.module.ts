import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StateModule } from '../@ngxs/state.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    StateModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  declarations: [ContentComponent, HomeComponent, SidebarComponent, NavbarComponent],
  exports: []
})
export class ComponentsModule { }
