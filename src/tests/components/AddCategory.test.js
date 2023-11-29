import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> ) 

    beforeEach( () => {
        jest.clearAllMocks();
         wrapper = shallow( <AddCategory setCategories={setCategories}/> ) 
    })

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola mundo!";
        input.simulate('change', { 
            target: {
                value: value
            }
         });

         expect( wrapper.find('p').text().trim() ).toBe( value );
    })

    test('No debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { 
            preventDefault(){}
        });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola Mundo!";

        input.simulate('change', {
            target: {
                value: value
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toBeCalledWith( expect.any(Function) );
        expect( input.prop('value') ).toBe('');
    })
    
    
    
    
})
