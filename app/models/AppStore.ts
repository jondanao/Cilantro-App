import AsyncStorage from "@react-native-async-storage/async-storage";
import { types, clone, flow } from "mobx-state-tree";
import { Recipe, IRecipe } from "./RecipeStore";

export const AppStore = types
    .model("AppStore", {
        favorites: types.optional(types.array(Recipe), []),
    })
    .actions((self) => ({
        loadFavorites: flow(function* () {
            const favorites = yield AsyncStorage.getItem("favorites");

            if (favorites) {
                self.favorites = JSON.parse(favorites);
            }
        }),

        toggleFavorite: flow(function* (recipe: IRecipe) {
            const found = self.favorites.find((r) => r.uri === recipe.uri);

            if (found) {
                self.favorites.remove(found);
            } else {
                self.favorites.push(clone(recipe));
            }

            yield AsyncStorage.setItem(
                "favorites",
                JSON.stringify(self.favorites)
            );
        }),
    }))
    .views((self) => ({
        get favoriteUris() {
            return self.favorites.map((r) => r.uri);
        },
    }));

export const appStore = AppStore.create();
appStore.loadFavorites();
