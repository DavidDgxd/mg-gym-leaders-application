import { Component, signal } from '@angular/core';
import { GymLeader } from '../gym-leader.model';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [LeaderInfo],
  selector: 'app-johto-region',
  styleUrl: './johto-region.css',
  templateUrl: './johto-region.html',
})
export class JohtoRegion {
  JohtoLeaders = signal<GymLeader[]>([
    { 
      name: 'Falkner', 
      badge: ' Zephyr Badge ', 
      location: 'Violet City',
      type: 'Flying',
      typeColor: 'purple',
      motto: 'The elegant flight of Flying-type Pokémon will slice through your defense!',  
      pokemonteam: [
        { name: 'Pidgey', type: 'Normal/Flying', level: 7 },
        { name: 'Pidgeotto', type: 'Normal/Flying', level: 9 }
      ] 
    },
    { 
      name: 'Bugsy', 
      badge: ' Hive Badge ',
      location: 'Azalea Town',
      type: 'Bug',
      typeColor: 'green', 
      motto: 'Bug Pokémon are deep! I will show you the real power of my research.',
      pokemonteam: [
        { name: 'Metapod', type: 'Bug', level: 14 },
        { name: 'Kakuna', type: 'Bug', level: 14 },
        { name: 'Scyther', type: 'Bug/Flying', level: 16 }
      ] 
    },
    { 
      name: 'Whitney', 
      badge: ' Plain Badge ', 
      location: 'Goldenrod City',
      type: 'Normal',
      typeColor: 'pink',
      motto: 'Cute doesn’t mean weak! Prepare for an unstoppable Rollout!',
      pokemonteam: [
        { name: 'Clefairy', type: 'Fairy', level: 18 },
        { name: 'Miltank', type: 'Normal', level: 20 }
      ] 
    },
    { 
      name: 'Morty', 
      badge: ' Fog Badge ', 
      location: 'Ecruteak City',
      type: 'Ghost',
      typeColor: 'purple',
      motto: 'See past the illusion, or my shadows will swallow your light!',
      pokemonteam: [
        { name: 'Gastly', type: 'Ghost/Poison', level: 21 },
        { name: 'Haunter', type: 'Ghost/Poison', level: 23 },
        { name: 'Gengar', type: 'Ghost/Poison', level: 25 }
      ] 
    },
    { 
      name: 'Chuck', 
      badge: ' Storm Badge ', 
      location: 'Cianwood City',
      type: 'Fighting',
      typeColor: 'red',
      motto: 'Raw strength and continuous discipline can smash through any barrier!',
      pokemonteam: [
        { name: 'Primeape', type: 'Fighting', level: 27 },
        { name: 'Poliwrath', type: 'Water/Fighting', level: 30 }
      ] 
    },
    { 
      name: 'Jasmine', 
      badge: ' Mineral Badge ', 
      location: 'Olivine City',
      type: 'Steel',
      typeColor: 'gray',
      motto: 'Steel is cold and hard, but our bond shines brighter than iron!',
      pokemonteam: [
        { name: 'Magnemite', type: 'Electric/Steel', level: 30 },
        { name: 'Steelix', type: 'Steel/Ground', level: 35 }
      ] 
    },
    { 
      name: 'Pryce', 
      badge: ' Glacier Badge ', 
      location: 'Mahogany Town',
      type: 'Ice',
      typeColor: 'blue',
      motto: 'Decades of winter have taught me that true power never melts.',
      pokemonteam: [
        { name: 'Seel', type: 'Water', level: 27 },
        { name: 'Dewgong', type: 'Water/Ice', level: 29 },
        { name: 'Piloswine', type: 'Ice/Ground', level: 31 }
      ]
    },
    { 
      name: 'Clair', 
      badge: ' Rising Badge ',
      location: 'Blackthorn City', 
      type: 'Dragon',
      typeColor: 'blue',
      motto: 'I am the ultimate Dragon master, and no challenger stands above me!',
      pokemonteam: [
        { name: 'Dragonair', type: 'Dragon', level: 37 },
        { name: 'Kingdra', type: 'Water/Dragon', level: 40 }
      ]
    }
  ]);
}