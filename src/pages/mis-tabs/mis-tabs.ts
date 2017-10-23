import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Inicio} from '../inicio/inicio';
import {Listado} from '../listado/listado';
import {Info} from '../info/info';


/**
 * Generated class for the MisTabs tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mis-tabs',
  templateUrl: 'mis-tabs.html'
})
export class MisTabs {

  tab1Root: any = Inicio;
  tab2Root: any = Listado;
  tab3Root: any = Info;

  constructor(public navCtrl: NavController) {}

}
