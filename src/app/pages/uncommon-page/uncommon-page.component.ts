import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/navbar/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

const client01 = {
  name: 'Juan Manuel',
  gender: 'male',
  age: '42',
  address: 'Seville, Spain',
};

const client02 = {
  name: 'Margarent Qually',
  gender: 'female',
  age: '32',
  address: 'Toronto, Canada',
};
@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18n Select
  client = signal(client01);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client01) {
      this.client.set(client02);
      return;
    }

    this.client.set(client01);
  }

  // i18n Plural
  clients = signal([
    'Maria',
    'Juan Manuel',
    'Natalia',
    'Andrea',
    'Ricardo',
    'Laura',
    'Mayleen',
  ]);

  clientsMap = {
    '=0': 'no hay ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    // '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient() {
    this.clients.update((currentClients) => currentClients.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Francisco',
    age: 32,
    address: 'Montequinto, Seville',
  };

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data in Promise Ready');
      // reject('There is an error in data');
      console.log('Finished promise');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap value: ', value))
  );
}
