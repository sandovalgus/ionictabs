import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the Db provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Db {
  db : SQLiteObject = null;

  constructor( public sqlite: SQLite) {
    console.log('Hello Db Provider');
  }



public openDb(){
      return this.sqlite.create({
          name: 'data.db',
          location: 'default' // el campo location es obligatorio
      })
      .then((db: SQLiteObject) => {
       this.db =db;
     })
  }

  public createTableSitios(){
    return this.db.executeSql("create table if not exists sitios( id INTEGER PRIMARY KEY AUTOINCREMENT, lat FLOAT, lng FLOAT, address TEXT, description TEXT, foto TEXT )",{})
  }

  public addSitio(sitio){
    let sql = "INSERT INTO sitios (lat, lng, address, description, foto) values (?,?,?,?,?)";
    return this.db.executeSql(sql,[sitio.lat,sitio.lng,sitio.address,sitio.description,sitio.foto]);
  }

    public getSitios(){
    let sql = "SELECT * FROM sitios";
    return this.db.executeSql(sql,{});
  }
  

}
