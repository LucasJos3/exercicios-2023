import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const botao = document.getElementById('btn-create-topic');
const botao2 = document.getElementById('btn-show-more');

botao?.addEventListener('click', fnform);

function fnform() {
  return alert();
}

botao2?.addEventListener('click', vermais);

function vermais() {
  let pontos = document.getElementById('pontos');
  let maisTexto = document.getElementById('mais');
  let bnt = document.getElementById('btn-show-more');

  if (pontos?.style.display === 'none') {
    pontos.style.display = 'inline';
  }
}
