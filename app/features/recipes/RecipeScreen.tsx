import { Image, View, ScrollView, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";

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
