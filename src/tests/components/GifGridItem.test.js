import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.com';
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
        
    test('Debe mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('Debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect( div.hasClass('animate__fadeIn') ).toBe( true )
    })
    
    
    
})
