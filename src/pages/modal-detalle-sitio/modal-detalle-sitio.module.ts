import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDetalleSitio } from './modal-detalle-sitio';

@NgModule({
  declarations: [
    ModalDetalleSitio,
  ],
  imports: [
    IonicPageModule.forChild(ModalDetalleSitio),
  ],
})
export class ModalDetalleSitioModule {}
