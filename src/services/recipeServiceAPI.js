const baseUrlAPI = 'https://api.spoonacular.com/recipes/';

const optionsSpoonacularApi = {
    method: 'GET',
    headers: {
        'x-api-key': '9848045d1a3b45afa10342967d43a793',
    }
};


export const getRecipeCategoryAPI = async (categoryStr, numberOfRecipes) => {
    try {
        // const res = await fetch('https://api.spoonacular.com/recipes/complexSearch?query=donut&number=8', options)
        const res = await fetch(
            `${baseUrlAPI}/complexSearch?query=${categoryStr}&number=${numberOfRecipes}`,
            optionsSpoonacularApi)
        const result = await res.json()
        return (result.results);
    } catch (error) {
        console.error("error: " + error)
    }

}

export const getRecipeByIdAPI = async (id) => {

    try {
        const res = await fetch(`${baseUrlAPI}${id}/information?includeNutrition=false`, optionsSpoonacularApi);
        const result = await res.json();
        // console.log(result);
        return result;

    } catch (error) {
        console.error("error: " + error)
    }
}
