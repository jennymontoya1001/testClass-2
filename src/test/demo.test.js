import '@testing-library/jest-dom';
import { isLoggedIn } from '../base/01_var';
import { user } from '../base/02_string';
import { getSaludo } from '../base/03_funtion';
import { getUser } from '../base/04_object';
import { personaje } from '../base/05_heroes_id';
import { heroes } from '../data/heroes';
import { getIdAsync } from '../base/06_promise';
import { getImagen } from '../base/07_async_await';

describe('pruebas demo', () => {

    //PRUEBAS FUNCIONES ASINCRÓNICAS

    //07_async_await
    test('verificar url', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string')
    })



    // 06_promise.js

    test('heroes async', (done) => {
        const id = 2;
        getIdAsync(id)
            .then(resp => {
                expect(resp).toBe(heroes[1])
                done()
            })

    })



    //------------------//----------------//

    //05_heroes_id
    test('retornar indefined si heroe no existe ', () => {
        const id = 10;
        const per = personaje(id);
        expect(per).toBe(undefined);
    })


    //05_heroes_id
    test('retornar heroe filtrado', () => {
        const id = 2;
        const per = personaje(id);
        const filtrado = heroes.find(hero => hero.id === 2)

        expect(per).toEqual(filtrado)



    })


    //04_objetc.js
    test('obtener objeto ', () => {
        expect(getUser()).toEqual({
            name: 'Jenny',
            pass: '123ABC'
        })
    })


    //03_funtion.js
    test('verificar nombre ', () => {
        const nom = 'Alex';
        const saludo = getSaludo(nom);

        expect(saludo).toBe(`Hola ${nom}, eres Bienvenido`)
    })


    //02_string.js
    test('validar usuario [user] ', () => {

        const userValidate = `Jenny`;

        expect(user).toBe(userValidate)

    })


    //01_var.js
    test('validar login [isLogeedIn]', () => {

        const isAutheticated = isLoggedIn;

        if (isAutheticated) {
            console.log("Bienvenido")
        } else {
            throw new Error('No autenticado')
        }

    })


})