import {
    Image,
    View,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

import FavoriteButton from "@/app/components/FavoriteButton";
import NutrientLabel from "@/app/components/NutrientLabel";
import NumberSpinner from "@/app/components/NumberSpinner";
import { IIngredient, IRecipe } from "@/app/models/RecipeStore";
import { appStore } from "@/app/models/AppStore";

const RecipeScreen = ({ route, navigation }) => {
    const { recipe } = route.params;
    const [yieldValue, setYieldValue] = useState(recipe.yield);

    useEffect(() => {
        navigation.setOptions({ title: recipe.label });
    }, []);

    // Event handlers
    const onFavoritePress = (recipe: IRecipe) => {
        appStore.toggleFavorite(recipe);
    };

    const onYieldChange = (value: number) => {
        setYieldValue(value);
    };

    const onGroceryItemPress = (ingredientLine: string) => {
        Alert.alert("Grocery List", `Add ${ingredientLine} to your list?`, [
            { text: "Cancel", style: "cancel" },
            { text: "Add", onPress: () => addGroceryItem(ingredientLine) },
        ]);
    };

    // Private methods
    const computeIngredient = (ingredient: IIngredient) => {
        let ingredientLine = "";
        const quantity = ingredient.quantity * (yieldValue / recipe.yield);
        const food = ingredient.food;
        const measure =
            ingredient.measure !== "<unit>" ? ingredient.measure : "";

        ingredientLine = quantity ? `${Math.round(quantity * 10) / 10} ` : "";
        ingredientLine += measure ? `${measure} ` : "";
        ingredientLine += `${food}`;

        return ingredientLine;
    };

    const isFavorited = () => {
        return appStore.favoriteUris.includes(recipe.uri);
    };

    const addGroceryItem = (ingredientLine: string) => {
        const id = Math.floor(Date.now() / 1000);
        appStore.toggleGroceryItem({ id, text: ingredientLine });
    };

    // Render methods
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: recipe.image }}
                        style={styles.image}
                    />
                    <FavoriteButton
                        isOn={isFavorited()}
                        style={styles.favoriteButton}
                        onPress={() => onFavoritePress(recipe)}
                    />
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{recipe.label}</Text>
                    <Text style={styles.source}>{recipe.source}</Text>
                </View>

                <View style={styles.nutrientContainer}>
                    <NutrientLabel
                        icon="calories"
                        value={recipe.calorieValue}
                    />
                    <NutrientLabel
                        icon="proteins"
                        value={recipe.proteinValue}
                    />
                </View>

                <View style={styles.nutrientContainer}>
                    <NutrientLabel icon="fats" value={recipe.fatValue} />
                    <NutrientLabel icon="carbs" value={recipe.carbValue} />
                </View>

                <View style={styles.ingredientsContainer}>
                    <View style={styles.ingredientHeaderContainer}>
                        <Text style={styles.ingredientTitle}>Ingredients</Text>
                        <NumberSpinner
                            value={yieldValue}
                            onChange={onYieldChange}
                        />
                    </View>

                    {recipe.ingredients.map((ingredient, index) => {
                        const ingredientLine = computeIngredient(ingredient);

                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() =>
                                    onGroceryItemPress(ingredientLine)
                                }
                            >
                                <Text style={styles.ingredientText}>
                                    {ingredientLine}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    imageContainer: {
        marginBottom: 20,
    },

    titleContainer: {
        padding: 20,
    },

    nutrientContainer: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },

    ingredientHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    ingredientsContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 20,
    },

    favoriteButton: {
        position: "absolute",
        top: 20,
        right: 20,
    },

    nutrientLabel: {
        flex: 1,
    },

    image: {
        width: "100%",
        height: 300,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    source: {
        fontSize: 18,
        color: "gray",
    },

    ingredientTitle: {
        fontSize: 20,
        fontWeight: "bold",
        flex: 1,
    },

    ingredientText: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
    },
});

export default observer(RecipeScreen);
