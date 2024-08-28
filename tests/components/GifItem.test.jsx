import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem.jsx';

describe('Pruebas en <GifItem />', () => {


    const title = 'Saitama'
    const images = 'https://saitama.jpg/'
    test('debe de hacer match con el snapshot ', () => {

        const { container } = render(<GifItem title={title} images={images} />)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL ', () => {

        render(<GifItem title={title} images={images} />)

        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(images);
        expect(alt).toBe(title)

    });

    test('debe de mostrar el titulo en el componente', () => {

        render(<GifItem title={title} images={images} />);

        expect(screen.getByText(title)).toBeTruthy();
    });
});