import { Component, inject } from '@angular/core';
import { HoennServices } from '../services/hoenn';

@Component({
  imports: [],
  selector: 'app-hoenn-leaders',
  styleUrl: './hoenn-leaders.css',
  templateUrl: './hoenn-leaders.html',
})
export class HoennLeaders {
  hoennService = inject(HoennServices);
}
