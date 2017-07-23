import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TareaService } from '../../app/services/tarea.service';
import { TareaFormPage } from './tarea-form';

@Component({
  selector: 'page-contactos',
  templateUrl: 'tareas.html'
})
export class TareasPage {
  private tareas:any[] = [];

  constructor(
    public navCtrl: NavController,
    public tareaService: TareaService
  ) {
    this.inicializar();
  }

  private inicializar() {
    this.tareaService.obtenerTareas()
    .subscribe(tareas => this.tareas = tareas);
  }

  public verForm(parametro) {
    this.navCtrl.push(TareaFormPage, {parametro});
  }

}
