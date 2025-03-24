import { Injectable, signal } from '@angular/core';

export type AvailableLocales = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private _currentLocale = signal<AvailableLocales>('es');

  constructor() {
    this._currentLocale.set(
      (localStorage.getItem('locale') as AvailableLocales) || 'es'
    );
  }

  get currentLocale() {
    return this._currentLocale();
  }

  changeLocale(locale: AvailableLocales) {
    localStorage.setItem('locale', locale);
    this._currentLocale.set(locale);
    // Lo tenemos que tomar del local storage porque al recargar el
    // navegador, el valor de este servicio siempre se resetearía
    window.location.reload(); // Recargar navegador web
  }

  /**
   * También se podría hacer con el paquete NgTranslate🧮
   * https://github.com/ngx-translate/core
   * https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate
   *
   * Con esta solución, se puede cambiar el idioma de la aplicación en tiempo real.
   * A cambio, tendrás que hacer un poco más de trabajo y depender de algo externo.
   */
}
