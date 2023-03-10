import IngredientsList from "./IngredientsList";

export default function RecipeDetails({
    id,
    title,
    dishTypes,
    image,
    summary,
    extendedIngredients,
    instructions,
    preparationMinutes,
    readyInMinutes,
    servings,
    sourceName,
    sourceUrl,

}) {
    return (
        <article>
            <header>
                <h2>{title}</h2>
                <p>Course: {dishTypes}</p>
                <p>Prep Time: {preparationMinutes}</p>
                <p>Cook Time: {readyInMinutes}</p>
                <p>Servings: {servings}</p>
                <h4>{summary}</h4>
            </header>
            <div className="container">
                <img src={image} alt={title} />
                <div className="container-ingredients">
                    <h2>Ingredients</h2>
                    <ul className="list">
                        {extendedIngredients.map(i => <IngredientsList key={`${i.id}${i.name}`} {...i} />)}
                    </ul>
                </div>
            </div>
            <div className="container-instructions">
                <h2>Instructions</h2>
                <p>{instructions.split('\r+\n').join("<br />")}</p>
    
            </div>
            <footer>
                <p>Source:
                    <a href={sourceUrl} target="_blank" rel="noreferrer" >{sourceName}</a></p>
            </footer>


        </article>
    );
} 