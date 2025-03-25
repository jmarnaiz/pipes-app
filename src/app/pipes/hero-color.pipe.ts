import { Pipe, type PipeTransform } from '@angular/core';
import { Color } from '../models/hero.model';

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {
  transform(value: Color): string {
    return Color[value];
  }
}
