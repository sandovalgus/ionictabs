import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Db } from '../../providers/db';
/**
 * Generated class for the ModalDetalleSitio page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-detalle-sitio',
  templateUrl: 'modal-detalle-sitio.html',
})
export class ModalDetalleSitio {
  sitio: any;
  edit : boolean = false;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private viewCtrl : ViewController,
 	  private launchNavigator : LaunchNavigator,
    private camera: Camera,
    private db: Db 

  	) {

  	 this.sitio = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetalleSitio');
  }

  cerrarModal(){ 
    this.viewCtrl.dismiss();
  }

    comoLlegar(){
    let destino = this.sitio.lat+', '+this.sitio.lng;
    this.launchNavigator.navigate(destino)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
    
 }

 editar(){
   this.edit = true;
 }

 sacarFoto(){

    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG, 
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.sitio.foto = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  guardarCambios(){ 
    this.db.modificaSitio(this.sitio).then((res)=>{
        this.edit = false;
    },(err)=>{  /* alert('error al meter en la bd'+err) */ })   
  }

}
