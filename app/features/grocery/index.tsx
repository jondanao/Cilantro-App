import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroceryScreen from "./GroceryScreen";

const Stack = createNativeStackNavigator();

const GroceryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GroceryScreen"
                component={GroceryScreen}
                options={{ title: "Grocery List" }}
            />
        </Stack.Navigator>
    );
};

export default GroceryStack;
