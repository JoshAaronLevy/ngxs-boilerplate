import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class MaterialModule { }
