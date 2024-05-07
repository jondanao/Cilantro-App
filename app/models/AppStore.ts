import { types, clone } from "mobx-state-tree";
import { Recipe, IRecipe } from "./RecipeStore";

export const AppStore = types
    .model("AppStore", {
        favorites: types.optional(types.array(Recipe), []),
    })
    .actions((self) => ({
        addFavorite: (recipe: IRecipe) => {
            self.favorites.push(clone(recipe));
            console.log(self.favorites.length);
        },
    }));

export const appStore = AppStore.create();
