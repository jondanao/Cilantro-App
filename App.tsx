import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "mobx-react";

import Images from "@/app/assets/Images";
import RecipesStack from "@/app/features/recipes";
import FavoritesScreen from "@/app/features/favorites/FavoritesScreen";
import GroceryScreen from "@/app/features/grocery/GroceryScreen";

import { RecipeStore } from "./app/models/RecipeStore";

const Tab = createBottomTabNavigator();
const recipeStore = RecipeStore.create();

export default function App() {
    return (
        <Provider recipeStore={recipeStore}>
            <NavigationContainer>
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
                        name="FavoritesScreen"
                        component={FavoritesScreen}
                        options={{
                            title: "Favorites",
                            tabBarBadge: 8,
                            tabBarIcon: () => (
                                <Image
                                    source={Images.tabs.favorites}
                                    style={styles.tabIcon}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="GroceryScreen"
                        component={GroceryScreen}
                        options={{
                            title: "Grocery",
                            tabBarBadge: 12,
                            tabBarIcon: () => (
                                <Image
                                    source={Images.tabs.grocery}
                                    style={styles.tabIcon}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
});
