import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react";

import Images from "@/app/assets/Images";
import RecipesStack from "@/app/features/recipes";
import FavoritesStack from "@/app/features/favorites";
import GroceryScreen from "@/app/features/grocery/GroceryScreen";
import { appStore } from "@/app/models/AppStore";

const Tab = createBottomTabNavigator();

const AppTabs = observer(() => {
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
                    tabBarBadge: appStore.favorites.length,
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
