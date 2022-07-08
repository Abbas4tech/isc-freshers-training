import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackdropComponent } from './backdrop/backdrop.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    BackdropComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
