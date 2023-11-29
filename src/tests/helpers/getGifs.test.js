import { getGifs } from "../../components/helpers/getGifs"

describe('Pruebas con getGifs', () => {
  
    test('Debe traer 10 elementos', async() => {
        const gifs = await getGifs('One punch');
        expect(gifs.length).toBe(10);
    });
    
    test('Debe traer 0 elementos', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });

})
