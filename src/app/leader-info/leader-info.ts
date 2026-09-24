import { Component, input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-leader-info',
  styleUrl: './leader-info.css',
  templateUrl: './leader-info.html',
})
export class LeaderInfo {
  name = input<string>();
  age = input<number>();
  location = input<string>();
  gymBadge = input<string>();
  typeColor = input<string>('black');
  pokemonTeam = input<any[]>();
  motto = input<string>();

  showMotto = signal(false);

  toggleMotto() {
    this.showMotto.update(val => !val);
  }
}