import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';


// Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-HN';
import{registerLocaleData} from '@angular/common'
registerLocaleData(localeEs);

import localeFR from '@angular/common/locales/fr';
registerLocaleData(localeFR);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule,
    AppRouterModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-HN' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
