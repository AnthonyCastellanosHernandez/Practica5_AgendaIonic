import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
//import { TareaService } from '../../app/services/tarea.service';
import { TareasPage } from './tareas';

@Component({
  selector: 'page-tarea-form',
  templateUrl: 'tarea-form.html'
})
export class TareaFormPage {
  private tarea:any = {
    nombre: "",
    descripcion: ""
  };
  private parametro:string;
  private encabezado:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public contactoService: ContactoService
  ) {
    this.parametro = this.navParams.get('parametro');
    if(this.parametro != 'nuevo') {
      this.encabezado = "Detalle Tarea";
      this.contactoService.buscarContacto(this.parametro)
      .subscribe(tarea => this.tarea = tarea);
    } else {
      this.encabezado = "Nuevo Tarea";
    }
  }

  public guardar() {
    this.tareaService.nuevoTarea(this.tarea)
    .subscribe(res => {
      this.toast.create({
        message: res.mensaje,
        duration: 2000
      }).present();
      if(res.estado) {
        this.navCtrl.push(TareasPage);
      } else {
        this.tarea.nombre = "";
        this.tarea.descripcion = "";
      }
    });
  }
}
