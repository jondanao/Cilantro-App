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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: 300,
    },
});

export default RecipeScreen;
