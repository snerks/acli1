import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Acli1AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Acli1AppComponent);
