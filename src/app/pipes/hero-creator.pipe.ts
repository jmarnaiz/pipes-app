import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../models/hero.model';

@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {
  transform(value: number): string {
    return Creator[value];
  }
}
