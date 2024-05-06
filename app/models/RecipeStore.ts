import { types, flow, applySnapshot } from "mobx-state-tree";

export const Ingredient = types.model("Ingredient", {
    text: types.string,
    quantity: types.number,
    measure: types.maybeNull(types.string),
    food: types.string,
    weight: types.number,
    foodCategory: types.string,
    image: types.string,
});

export const Digest = types.model("Digest", {
    label: types.string,
    tag: types.string,
    schemaOrgTag: types.maybeNull(types.string),
    total: types.number,
    hasRDI: types.boolean,
    daily: types.number,
    unit: types.string,
});

export const Recipe = types.model("Recipe", {
    uri: types.string,
    label: types.string,
    image: types.string,
    source: types.string,
    shareAs: types.string,
    yield: types.number,
    healthLabels: types.array(types.string),
    ingredientLines: types.array(types.string),
    ingredients: types.array(Ingredient),
    digest: types.array(Digest),
});

export const RecipeStore = types
    .model("RecipeStore", {
        recipes: types.optional(types.array(Recipe), []),
        error: types.maybeNull(types.string),
    })
    .actions((self) => ({
        searchRecipes: flow(function* (searchText: string) {
            self.error = null;
            const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchText}&app_id=67f43a52&app_key=257a9e063564019af4d5257ab5033236`;

            try {
                const response = yield fetch(url);

                if (response.status === 200) {
                    const data = yield response.json();
                    const recipes = data.hits.map((hit) => hit.recipe);
                    applySnapshot(self.recipes, recipes);
                } else {
                    self.error = "Failed to fetch recipes";
                }
            } catch (error) {
                self.error = "Something went wrong";
                console.log(error);
            }
        }),
    }));

export const recipeStore = RecipeStore.create();
