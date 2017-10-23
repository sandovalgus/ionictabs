import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Info } from './info';

@NgModule({
  declarations: [
    Info,
  ],
  imports: [
    IonicPageModule.forChild(Info),
  ],
})
export class InfoModule {}
