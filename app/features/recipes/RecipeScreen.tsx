import { Image, View, ScrollView, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";

import NutrientLabel from "@/app/components/NutrientLabel";

const RecipeScreen = ({ route, navigation }) => {
    const { recipe } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: recipe.label });
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={{ uri: recipe.image }} style={styles.image} />
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
});

export default RecipeScreen;
