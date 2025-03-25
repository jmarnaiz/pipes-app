import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../models/hero.model';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(value: Hero[], search: string): Hero[] {
    if (!search) return value;

    search = search.toLowerCase();

    return value.filter((hero) => hero.name.toLowerCase().includes(search));
  }
}
