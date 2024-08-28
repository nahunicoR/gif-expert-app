import { useState } from 'react';
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        categories.includes(newCategory) ?
            alert('La categoría ya fue solicitada') :
            setCategories([newCategory, ...categories]) // -------> utilizando spread Operator
        //setCategories(categories.concat('Dragon Ball'))//-----> utilizando la funcion concat nativa
    }



    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewValue={onAddCategory}
            />
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}

