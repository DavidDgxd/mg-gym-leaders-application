import { Injectable, signal } from '@angular/core';
import { HoennLeader } from '../gym-leader.model';
@Injectable({
    providedIn: 'root'
})
export class HoennServices {
    private registry = signal<HoennLeader[]>([
        {
            name: 'Roxanne',
            town: 'Rustboro City',
            specialty: 'Rock',
            badge: 'Stone Badge',
            pokemonTeam: ['Geodude', 'Onix', 'Nosepass']
        },
        {
            name: 'Brawly',
            town: 'Dewford Town',
            specialty: 'Fighting',
            badge: 'Knuckle Badge',
            pokemonTeam: ['Makuhita', 'Meditite', 'Machop']
        },
        {
            name: 'Wattson',
            town: 'Mauville City',
            specialty: 'Electric',
            badge: 'Dynamo Badge',
            pokemonTeam: ['Magnemite', 'Voltorb', 'Electrike']
        },
        {
            name: 'Flannery',
            town: 'Lavaridge Town',
            specialty: 'Fire',
            badge: 'Heat Badge',
            pokemonTeam: ['Numel', 'Slugma', 'Torkoal']
        },
        {
            name: 'Norman',
            town: 'Petalburg City',
            specialty: 'Normal',
            badge: 'Balance Badge',
            pokemonTeam: ['Slaking', 'Vigoroth',  'Linoone']
        },
        {
            name: 'Winona',
            town: 'Fortree City',
            specialty: 'Flying',
            badge: 'Feather Badge',
            pokemonTeam: ['Swellow', 'Pelipper', 'Skarmory']
        },
        {
            name: 'Tate & Liza',
            town: 'Mossdeep City',
            specialty: 'Psychic',
            badge: 'Mind Badge',
            pokemonTeam: ['Solrock', 'Lunatone', 'Xatu']
        },
        {
            name: 'Wallace',
            town: 'Sootopolis City',
            specialty: 'Water',
            badge: 'Rain Badge',
            pokemonTeam: ['Milotic', 'Whiscash', 'Gyarados']
        }
    ])

    trainers = this.registry.asReadonly();
}
