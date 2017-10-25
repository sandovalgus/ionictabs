import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Db } from '../../providers/db';
 import {ModalDetalleSitio} from '../modal-detalle-sitio/modal-detalle-sitio';

/**
 * Generated class for the Listado page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class Listado {
	sitios: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    public db : Db
      ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Listado');
  }

    ionViewDidEnter(){
     this.db.getSitios().then((res)=>{
    this.sitios = [];
    for(var i = 0; i < res.rows.length; i++){
        this.sitios.push({
          id: res.rows.item(i).id, 
          lat: res.rows.item(i).lat, 
          lng: res.rows.item(i).lng, 
          address: res.rows.item(i).address,
          description: res.rows.item(i).description,
          foto: res.rows.item(i).foto
        });
    }

    },(err)=>{ /* alert('error al sacar de la bd'+err) */ })
   }


   muestraSitio(sitio){
      let modalSitio = this.modalCtrl.create( ModalDetalleSitio, sitio );
      modalSitio.present();
   }


}
 