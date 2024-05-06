import React, { useState } from "react";
import {
    Alert,
    FlatList,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import SearchBar from "@/app/components/SearchBar";
import RecipeCard from "@/app/components/RecipeCard";
import ProgressBar from "@/app/components/ProgressBar";
import { recipeStore } from "@/app/models/RecipeStore";

const RecipesScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [progressVisible, setProgressVisible] = useState(false);

    // Event handlers
    const onSearchChangeText = (text: string) => {
        setSearchText(text);
    };

    const onSearchSubmit = () => {
        fetchData();
    };

    const onRecipePress = (recipe) => {
        navigation.push("RecipeScreen", {
            recipe: recipe,
        });
    };

    // Private methods
    const fetchData = () => {
        setProgressVisible(true);

        recipeStore.searchRecipes(searchText).then(() => {
            setProgressVisible(false);

            if (recipeStore.error) {
                Alert.alert("Error", recipeStore.error);
            }
        });
    };

    // Render methods
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <SearchBar
                    text={searchText}
                    onChangeText={onSearchChangeText}
                    onSubmitEditing={onSearchSubmit}
                />
                <FlatList
                    data={recipeStore.recipes}
                    renderItem={({ item }) => (
                        <RecipeCard
                            title={item.label}
                            source={item.source}
                            imageUrl={item.image}
                            calories={item.digest[0].total}
                            onPress={() => onRecipePress(item)}
                        />
                    )}
                    keyExtractor={(item) => item.uri}
                />
                <ProgressBar visible={progressVisible} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default RecipesScreen;
