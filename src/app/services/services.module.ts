import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntryService } from './entry.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  exports: [],
  declarations: []
})
export class ServicesModule { }
