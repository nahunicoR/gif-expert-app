import { getGifs } from '../../src/helpers/getGifs.js'

describe('Pruebas en getGifs()', () => {


    test('debe de retornar un arreglo de gifs', async () => {

        const gifs = await getGifs()
        console.log(gifs)
    });
});