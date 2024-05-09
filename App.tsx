import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react";

import Images from "@/app/assets/Images";
import RecipesStack from "@/app/features/recipes";
import FavoritesStack from "@/app/features/favorites";
import GroceryStack from "@/app/features/grocery";
import { useAppStore } from "@/app/models/AppStore";

const Tab = createBottomTabNavigator();

const AppTabs = observer(() => {
    const appStore = useAppStore();
    const favoritesCount = appStore.favorites.length || undefined;
    const groceryListCount = appStore.groceryList.length || undefined;

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="RecipesStack"
                component={RecipesStack}
                options={{
                    title: "Recipes",
                    tabBarIcon: () => (
                        <Image
                            source={Images.tabs.recipes}
                            style={styles.tabIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="FavoritesStack"
                component={FavoritesStack}
                options={{
                    title: "Favorites",
                    tabBarBadge: favoritesCount,
                    tabBarIcon: () => (
                        <Image
                            source={Images.tabs.favorites}
                            style={styles.tabIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="GroceryStack"
                component={GroceryStack}
                options={{
                    title: "Grocery List",
                    tabBarBadge: groceryListCount,
                    tabBarIcon: () => (
                        <Image
                            source={Images.tabs.grocery}
                            style={styles.tabIcon}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
});

export default function App() {
    return (
        <NavigationContainer>
            <AppTabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
});
