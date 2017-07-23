import { Component } from '@angular/core';

import { TareasPage } from '../tareas/tareas';
import { ContactosPage } from '../contactos/contactos';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactosPage;
  tab1Root = TareasPage;
  tab2Root = CitasPage;

  constructor() {

  }
}
