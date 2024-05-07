import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "./FavoritesScreen";
import RecipeScreen from "../recipes/RecipeScreen";

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FavoritesScreen"
                component={FavoritesScreen}
                options={{ title: "Favorites" }}
            />
            <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
        </Stack.Navigator>
    );
};

export default FavoritesStack;
