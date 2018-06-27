import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatCommonModule, MatListModule } from '@angular/material';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatCommonModule,
    MatToolbarModule,
    MatListModule,

    FormsModule
  ]
})
export class MaterialModule { }
