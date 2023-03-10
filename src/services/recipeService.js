const baseUrl = 'https://api.spoonacular.com/recipes/';

const options = {
    method: 'GET',
    headers: {
        'x-api-key': '9848045d1a3b45afa10342967d43a793',
    }
};


export const getRecipeCategory = async (categoryStr, numberOfRecipes) => {
    try {
        // const res = await fetch('https://api.spoonacular.com/recipes/complexSearch?query=donut&number=8', options)
        const res = await fetch(`${baseUrl}/complexSearch?query=${categoryStr}&number=${numberOfRecipes}`, options)
        const result = await res.json()
        return (result.results);
    } catch (error) {
        console.error("error: " + error)
    }

}

export const getRecipeById = async (id) => {

    try {
        // https://api.spoonacular.com/recipes/{id}/information
        const res = await fetch(`${baseUrl}${id}/information?includeNutrition=false`, options);
        const result = await res.json();
        console.log(result);
        return result;

    } catch (error) {
        console.error("error: " + error)
    }
}
