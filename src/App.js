import React, { useState } from "react";

// Sample recipe data
const initialRecipes = [
  {
    id: 1,
    name: "Simple Pancakes",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "2 tbsp sugar",
      "2 tbsp butter",
    ],
    instructions:
      "1. Mix dry ingredients. 2. Whisk in wet ingredients. 3. Cook on a hot griddle. 4. Serve.",
  },
  {
    id: 2,
    name: "Tomato Pasta",
    ingredients: [
      "1 lb pasta",
      "28 oz crushed tomatoes",
      "2 cloves garlic",
      "1/4 cup olive oil",
    ],
    instructions:
      "1. Cook pasta. 2. Sauté garlic. 3. Add tomatoes. 4. Combine.",
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips",
    ],
    instructions:
      "1. Preheat oven to 375°F (190°C). 2. In a bowl, whisk together flour, baking soda, and salt. 3. In a large bowl, cream together butter and sugars until smooth. 4. Beat in eggs one at a time, then stir in vanilla. 5. Gradually blend in dry ingredients. 6. Stir in chocolate chips. 7. Drop rounded tablespoons onto ungreased baking sheets. 8. Bake for 9 to 11 minutes, or until golden brown. 9. Let cool.",
  },
  {
    id: 4,
    name: "Grilled Cheese Sandwich",
    ingredients: ["2 slices bread", "2 slices cheese", "1 tbsp butter"],
    instructions:
      "1. Spread butter on the outside of both slices of bread. 2. Place one slice, butter-side down, in a skillet. 3. Add cheese. 4. Top with the other slice, butter-side up. 5. Grill until golden brown and cheese is melted.",
  },
  {
    id: 5,
    name: "Fruit Salad",
    ingredients: [
      "2 cups mixed fruit",
      "1 tbsp honey (optional)",
      "1 tbsp lemon juice (optional)",
    ],
    instructions:
      "1. Wash and cut all fruit into bite-sized pieces. 2. Combine all fruit in a large bowl. 3. If desired, drizzle with honey and lemon juice. 4. Toss gently.",
  },
  {
    id: 6,
    name: "Paneer Tikka",
    ingredients: [
      "Paneer-200 grams (cut into cubes)",
      "Thick Curd / Yogurt -½ cup",
      "Red Chili Powder -1 tsp",
      "Salt to taste",
    ],
    instructions:
      "1.Mix curd, chili powder, and salt in a bowl to make a marinade.2. Add paneer cubes and gently coat them well. Let it marinate for 10-15 minutes .3. Cook on a hot tawa or pan with a little oil-turn sides until golden spots appear. 4 .Serve hot with chutney or ketchup.",
  },
];

// Component to display a single recipe card
const RecipeCard = ({ recipe, onSelectRecipe }) => {
  return (
    <div
      className="mb-4 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-white"
      onClick={() => onSelectRecipe(recipe)}
    >
      <h2 className="text-xl font-semibold">{recipe.name}</h2>
    </div>
  );
};

// Component to display the details of a selected recipe
const RecipeDetail = ({ recipe }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{recipe.name}</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        <div className="max-h-96 overflow-y-auto p-4 border border-gray-200 rounded-md">
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions
              .split(".")
              .filter(Boolean)
              .map((instruction, index) => (
                <li key={index}>{instruction.trim()}</li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const RecipeApp = () => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Recipe App
      </h1>
      {selectedRecipe ? (
        <>
          <button
            onClick={handleBackToList}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Back to List
          </button>
          <RecipeDetail recipe={selectedRecipe} />
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelectRecipe={handleSelectRecipe}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeApp;
