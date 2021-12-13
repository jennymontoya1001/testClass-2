import {personaje} from '../base/05_heroes_id';

export const getIdAsync = (id) =>{
   return new Promise((resolve,reject) => {

    setTimeout(() => {

        const p1 =  personaje(id);
        if(p1){
            resolve(p1)
        }else{
            reject('No se encontró el heroe')
        }
        
    }, 2000);

   })
}
