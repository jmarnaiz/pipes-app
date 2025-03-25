import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { NgClass, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { Creator, Hero } from '../../models/hero.model';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    HeroCreatorPipe,
    TitleCasePipe,
    HeroSortByPipe,
    HeroFilterPipe,
    UpperCasePipe,
    NgClass,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  creator = Creator;
  name = signal('Juan Manuel Arnaiz');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');
}
