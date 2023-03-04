const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

export const getRandomRecipe = async () => {

    const res = await fetch(baseUrl + "/random.php");
    const result = await res.json();
    return (result.meals);
}
