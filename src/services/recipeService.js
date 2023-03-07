const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

const options = {
    method: 'GET',
    headers: {
        'x-api-key': '9848045d1a3b45afa10342967d43a793',
    }
};

export const getRandomRecipe = async () => {

    const res = await fetch(baseUrl + "/random.php");
    const result = await res.json();
    return (result.meals);
}


export const spoonacularTest = async() =>{
  
    const res = await fetch('https://api.spoonacular.com/recipes/complexSearch?query=donut&number=8', options)
    const result = await res.json()
    return (result.results);
        // .catch(err => console.error(err));
}

// export const spoonacularTest = async() =>{
  
//     fetch('https://api.spoonacular.com/recipes/complexSearch?query=cake&number=10', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }