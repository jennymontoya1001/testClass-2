import {heroes} from '../data/heroes';

export const personaje = (id) => {
    
    return heroes.find(hero => hero.id === id)
}