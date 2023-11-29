import React from 'react';
import {shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componente <GifGrid/>', () => {

    const category = "One Punch";

    test('Debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category=""/> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier_cosa.jpg',
            title: 'Cualquier cosa 1 '
        }, {
            id: '123',
            url: 'https://localhost/cualquier_cosa.jpg',
            title: 'Cualquier cosa 2'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        render(<GifGrid category={ category } />);
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(gifs.length);

    })
    
    
})
