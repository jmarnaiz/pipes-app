import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../models/hero.model';

@Pipe({
  name: 'heroTextColor',
})
export class HeroTextColorPipe implements PipeTransform {
  transform(color: Color): string {
    return ColorMap[color];
  }
}
