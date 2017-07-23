import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactoFormPage } from '../pages/contactos/contacto-form';
import { ContactosPage } from '../pages/contactos/contactos';
import { TareaFormPage } from '../pages/tareas/tarea-form';
import { TareasPage } from '../pages/tareas/tareas';
import { CitaFormPage } from '../pages/citas/cita-form';
import { CitasPage } from '../pages/citas/citas';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { AuthService } from './services/auth.service';
import { ContactoService } from './services/contacto.service';
import { CitasService } from './services/citas.service';
import { TareaService } from './services/tarea.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ContactosPage,
    ContactoFormPage,
    TareasPage,
    TareaFormPage,
    CitasPage,
    CitaFormPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactosPage,
    TareasPage,
    CitasPage,
    HomePage,
    ContactoFormPage,
    TareaormPage,
    CitaFormPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    AuthService,
    ContactoService,
    TareaService,
    CitaService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
