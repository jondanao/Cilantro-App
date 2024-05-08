import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { clone } from "mobx-state-tree";
import { observer } from "mobx-react";

import { appStore } from "@/app/models/AppStore";
import { IRecipe } from "@/app/models/RecipeStore";
import RecipeCard from "@/app/components/RecipeCard";

const FavoritesScreen = ({ navigation }) => {
    // Event handlers
    const onRecipePress = (recipe: IRecipe) => {
        navigation.push("RecipeScreen", {
            recipe: clone(recipe),
        });
    };

    // Render methods
    return (
        <View style={styles.container}>
            <FlatList
                data={appStore.favorites}
                renderItem={({ item }) => (
                    <RecipeCard
                        title={item.label}
                        source={item.source}
                        imageUrl={item.image}
                        calories={item.calories}
                        onPress={() => onRecipePress(item)}
                    />
                )}
                keyExtractor={(item) => item.uri}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default observer(FavoritesScreen);
