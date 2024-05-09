import { types, flow, applySnapshot, Instance } from "mobx-state-tree";

export const Ingredient = types.model("Ingredient", {
    text: types.string,
    quantity: types.number,
    measure: types.maybeNull(types.string),
    food: types.string,
    weight: types.number,
    foodCategory: types.maybeNull(types.string),
    image: types.maybeNull(types.string),
});

export type IIngredient = Instance<typeof Ingredient>;

export const Digest = types.model("Digest", {
    label: types.string,
    tag: types.string,
    schemaOrgTag: types.maybeNull(types.string),
    total: types.number,
    hasRDI: types.boolean,
    daily: types.number,
    unit: types.string,
});

export const Recipe = types
    .model("Recipe", {
        uri: types.string,
        label: types.string,
        image: types.string,
        source: types.string,
        shareAs: types.string,
        yield: types.number,
        calories: types.number,
        healthLabels: types.array(types.string),
        ingredientLines: types.array(types.string),
        ingredients: types.array(Ingredient),
        digest: types.array(Digest),
    })
    .views((self) => ({
        get calorieValue() {
            const nutrient = self.calories;
            return `${nutrient.toFixed(0)} kcal`;
        },

        get fatValue() {
            const nutrient = self.digest.find((digest) => digest.tag === "FAT");

            if (!nutrient) {
                return "0g fats";
            }

            return `${nutrient.total.toFixed(0)}${nutrient.unit} fats`;
        },

        get proteinValue() {
            const nutrient = self.digest.find(
                (digest) => digest.tag === "PROCNT"
            );

            if (!nutrient) {
                return "0g proteins";
            }

            return `${nutrient.total.toFixed(0)}${nutrient.unit} proteins`;
        },

        get carbValue() {
            const nutrient = self.digest.find(
                (digest) => digest.tag === "CHOCDF"
            );

            if (!nutrient) {
                return "0g carbs";
            }

            return `${nutrient.total.toFixed(0)}${nutrient.unit} carbs`;
        },
    }));

export type IRecipe = Instance<typeof Recipe>;

export const RecipeStore = types
    .model("RecipeStore", {
        recipes: types.optional(types.array(Recipe), []),
        error: types.maybeNull(types.string),
    })
    .actions((self) => ({
        searchRecipes: flow(function* (searchText: string) {
            self.error = null;

            const appId = process.env.EXPO_PUBLIC_EDAMAM_APP_ID;
            const appKey = process.env.EXPO_PUBLIC_EDAMAM_APP_KEY;
            const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchText}&app_id=${appId}&app_key=${appKey}`;

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

export type IRecipeStore = Instance<typeof RecipeStore>;

let recipeStore: IRecipeStore;

export const useRecipeStore = () => {
    if (!recipeStore) {
        recipeStore = RecipeStore.create();
    }

    return recipeStore;
};
