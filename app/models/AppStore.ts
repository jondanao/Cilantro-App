import AsyncStorage from "@react-native-async-storage/async-storage";
import { types, clone, flow, Instance } from "mobx-state-tree";
import { Recipe, IRecipe } from "./RecipeStore";

export const GroceryItem = types.model("GroceryItem", {
    id: types.number,
    text: types.string,
});

export type IGroceryItem = Instance<typeof GroceryItem>;

export const AppStore = types
    .model("AppStore", {
        favorites: types.optional(types.array(Recipe), []),
        groceryList: types.optional(types.array(GroceryItem), []),
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

        loadGroceryList: flow(function* () {
            const groceryList = yield AsyncStorage.getItem("groceryList");

            if (groceryList) {
                self.groceryList = JSON.parse(groceryList);
            }
        }),

        toggleGroceryItem: flow(function* (item: IGroceryItem) {
            const found = self.groceryList.find((i) => i.id === item.id);

            if (found) {
                self.groceryList.remove(found);
            } else {
                self.groceryList.push(item);
            }

            yield AsyncStorage.setItem(
                "groceryList",
                JSON.stringify(self.groceryList)
            );
        }),
    }))
    .views((self) => ({
        get favoriteUris() {
            return self.favorites.map((r) => r.uri);
        },
    }));

let appStore;

export const useAppStore = () => {
    if (!appStore) {
        appStore = AppStore.create();
        appStore.loadFavorites();
        appStore.loadGroceryList();
    }

    return appStore;
};
