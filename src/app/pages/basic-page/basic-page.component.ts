import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocales, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localeService = inject(LocalService);
  // Se podría tomar el current del localeService, y de hecho es lo ideal,
  // pero lo hago de la forma de abajo para mostrar que también se puede
  // hacer de esta manera.
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('juan manuel');
  nameUpper = signal('JUAN MANUEL');
  fullName = signal('JuAn MAnuEl arNaIz');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    }); // Cleanup
  });

  changeLocale(locale: AvailableLocales) {
    this.localeService.changeLocale(locale);
  }
}
