import {
    Image,
    View,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";

import FavoriteButton from "@/app/components/FavoriteButton";
import NutrientLabel from "@/app/components/NutrientLabel";
import NumberSpinner from "@/app/components/NumberSpinner";

const RecipeScreen = ({ route, navigation }) => {
    const { recipe } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: recipe.label });
    }, []);

    // Event handlers
    const onFavoritePress = () => {
        console.log("onFavoritePress");
    };

    // Private methods

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
                        style={styles.favoriteButton}
                        onPress={onFavoritePress}
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
                        <NumberSpinner value={recipe.yield} />
                    </View>

                    {recipe.ingredientLines.map((ingredient, index) => (
                        <TouchableOpacity key={index}>
                            <Text style={styles.ingredientText}>
                                {ingredient}
                            </Text>
                        </TouchableOpacity>
                    ))}
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

export default RecipeScreen;
