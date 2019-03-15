import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTableModule,
  ],
})

export class MaterialModule {
}
