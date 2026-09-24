import { Component, signal } from '@angular/core';
import { GymLeader } from '../gym-leader.model';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [LeaderInfo],
  selector: 'app-kanto-region',
  styleUrl: './kanto-region.css',
  templateUrl: './kanto-region.html',
})
export class KantoRegion {
  KantoGymLeaders = signal<GymLeader[]>([
    { 
      name: 'Brock', 
      badge: ' Boulder Badge ', 
      location: 'Pewter City',
      type: 'Rock/Ground',
      typeColor: 'brown',
      motto: 'My rock-hard willpower will never break!',
      pokemonteam: [
        { name: 'Onix', type: 'Rock/Ground', level: 12 },
        { name: 'Geodude', type: 'Rock/Ground', level: 10 }
      ] 
    },
    { 
      name: 'Misty', 
      badge: ' Cascade Badge ',
      location: 'Cerulean City',
      type: 'Water',
      typeColor: 'blue', 
      motto: 'My policy is an all-out offensive with Water-type Pokémon!',
      pokemonteam: [
        { name: 'Staryu', type: 'Water', level: 18 },
        { name: 'Starmie', type: 'Water/Psychic', level: 21 }
      ] 
    },
    { 
      name: 'Lt. Surge', 
      badge: ' Thunder Badge ', 
      location: 'Vermilion City',
      type: 'Electric',
      typeColor: 'NavyGreen',
      motto: 'Electric Pokémon saved me during the war! They will zapp you!',
      pokemonteam: [
        { name: 'Pikachu', type: 'Electric', level: 22 },
        { name: 'Raichu', type: 'Electric', level: 28 },
        { name: 'Magnemite', type: 'Electric/Steel', level: 25 }
      ] 
    },
    { 
      name: 'Erika', 
      badge: ' Rainbow Badge ', 
      location: 'Celadon City',
      type: 'Grass',
      typeColor: 'green',
      motto: 'My domain is Grass-type Pokémon, delicate yet surprisingly tough.',
      pokemonteam: [
        { name: 'Vileplume', type: 'Grass/Poison', level: 29 },
        { name: 'Tangela', type: 'Grass', level: 24 },
        { name: 'Weepinbell', type: 'Grass/Poison', level: 30 }
      ] 
    },
    { 
      name: 'Koga', 
      badge: ' Soul Badge ', 
      location: 'Fuchsia City',
      type: 'Poison',
      typeColor: 'purple',
      motto: 'Despair to the creepy power of ninja toxins and Poison Pokémon!',
      pokemonteam: [
        { name: 'Koffing', type: 'Poison', level: 37 },
        { name: 'Muk', type: 'Poison', level: 39 },
        { name: 'Weezing', type: 'Poison', level: 42 }
      ] 
    },
    { 
      name: 'Sabrina', 
      badge: ' Marsh Badge ', 
      location: 'Saffron City',
      type: 'Psychic',
      typeColor: 'pink',
      motto: 'I had psychic powers ever since I was a child. I foresee your loss!',
      pokemonteam: [
        { name: 'Alakazam', type: 'Psychic', level: 35 },
        { name: 'Kadabra', type: 'Psychic', level: 38 },
        { name: 'Mr. Mime', type: 'Psychic/Fairy', level: 40 }
      ] 
    },
    { 
      name: 'Blaine', 
      badge: ' Volcano Badge ', 
      location: 'Cinnabar Island',
      type: 'Fire',
      typeColor: 'orange',
      motto: 'You better have Burn Heal ready for this blazing heat!',
      pokemonteam: [
        { name: 'Arcanine', type: 'Fire', level: 40 },
        { name: 'Rapidash', type: 'Fire', level: 42 },
        { name: 'Magmar', type: 'Fire', level: 45 }
      ]
    },
    { 
      name: 'Giovanni', 
      badge: ' Earth Badge ',
      location: 'Viridian City', 
      type: 'Ground/Rock',
      typeColor: 'brown',
      motto: 'You will feel the full fury of Team Rocket and ground strength!',
      pokemonteam: [
        { name: 'Rhyhorn', type: 'Ground/Rock', level: 45 },
        { name: 'Nidoking', type: 'Poison/Ground', level: 50 },
        { name: 'Dugtrio', type: 'Ground', level: 48 }
      ]
    }
  ]);
}