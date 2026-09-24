import { Injectable, Service, signal } from '@angular/core';

@Service()
export class HoennServices {
    private registry = signal([
        {
            name: 'Ash Ketchum',
            team: ['Pikachu', 'Bulbasaur', 'Charizard'],
            items: ['Master Ball', 'Potion', 'Revive'],
        }
    ])

    trainers = this.registry.asReadonly();
}
