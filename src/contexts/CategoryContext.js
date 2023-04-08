import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const CategoryContext = createContext();

export const CategoryProvider = ({
    children
}) => {

    const [selectedCategory, setSelectedCategory] = useState('Cake');
    const navigate = useNavigate();


    const onClickCategoryHandler = (e) => {
        e.preventDefault();
        const currentCategory = e.target.name;
        if (currentCategory !== '') {
            setSelectedCategory(currentCategory);
            navigate(`/categories/${currentCategory}`);

        }
    }

    const contextValues = {
        selectedCategory,
        setSelectedCategory,
        onClickCategoryHandler,

    };

    return (
        <CategoryContext.Provider value={contextValues}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);

    return context;
};
