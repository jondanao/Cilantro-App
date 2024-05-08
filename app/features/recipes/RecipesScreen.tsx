import React, { useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import SearchBar from "@/app/components/SearchBar";
import RecipeCard from "@/app/components/RecipeCard";
import ProgressBar from "@/app/components/ProgressBar";
import { recipeStore } from "@/app/models/RecipeStore";
import Images from "@/app/assets/Images";

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
                {!recipeStore.recipes.length && (
                    <Image source={Images.cover} style={styles.coverImage} />
                )}
                <SearchBar
                    text={searchText}
                    onChangeText={onSearchChangeText}
                    onSubmitEditing={onSearchSubmit}
                />
                <FlatList
                    data={recipeStore.recipes.slice()}
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

    coverImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        resizeMode: "cover",
    },
});

export default RecipesScreen;
