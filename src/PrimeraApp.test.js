import '@testing-library/jest-dom';
import React from "react";
import {shallow} from 'enzyme';
import { PrimeraApp } from "./PrimeraApp";

describe('pruebas <Primera App/>', () => {
    test('validar render de <PrimeraApp/>', () => {
        const saludoL = 'Hola Clase';
        const subtituloL = 'Bienvenidos';

        const wrapper = shallow(<PrimeraApp
         saludo={saludoL}
         subtitulo={subtituloL}
        />)

        expect(wrapper).toMatchSnapshot();
    })
})
