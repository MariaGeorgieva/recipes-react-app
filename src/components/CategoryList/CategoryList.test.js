import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CategoryList from './CategoryList';
import { CategoryProvider } from '../../contexts/CategoryContext';

describe('CategoryList component', () => {
    it('renders a list of categories', () => {
        render(
            <MemoryRouter>

                <CategoryProvider>
                    <CategoryList />
                </CategoryProvider>
            </MemoryRouter>
        );

        const categories = [
            { name: 'Cakes', url: 'cake' },
            { name: 'Ice Cream', url: 'ice-cream' },
            { name: 'Cupcakes', url: 'cupcakes' }
        ];

        categories.forEach(category => {
            const categoryLinks = screen.queryAllByRole('link');
            expect(categoryLinks.some(link => link.textContent === category.name)).toBe(true);
            expect(categoryLinks.some(link => link.href.includes(`/categories/${category.url}`))).toBe(true);

        });
    });
});



