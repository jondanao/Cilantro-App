import { types, clone } from "mobx-state-tree";
import { Recipe, IRecipe } from "./RecipeStore";

export const AppStore = types
    .model("AppStore", {
        favorites: types.optional(types.array(Recipe), []),
    })
    .actions((self) => ({
        toggleFavorite: (recipe: IRecipe) => {
            const found = self.favorites.find((r) => r.uri === recipe.uri);

            if (found) {
                self.favorites.remove(found);
            } else {
                self.favorites.push(clone(recipe));
            }

            console.log("Favorites: ", self.favorites);
        },
    }));

export const appStore = AppStore.create();
