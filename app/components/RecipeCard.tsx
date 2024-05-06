import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Images from "@/app/assets/Images";

interface RecipeCardProps {
    title: string;
    source: string;
    imageUrl: string;
    calories: number;
    onPress: () => void;
}

const RecipeCard = (props: RecipeCardProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.imageUrl }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <View style={styles.byLineContainer}>
                        <Text style={styles.source}>{props.source}</Text>
                        <View style={styles.calorieContainer}>
                            <Image
                                source={Images.icons.calories}
                                style={styles.calorieIcon}
                            />
                            <Text style={styles.calories}>
                                {props.calories} kcal
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        height: 270,
        borderRadius: 20,
    },

    detailsContainer: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
    },

    byLineContainer: {
        flexDirection: "row",
        marginTop: 5,
    },

    calorieContainer: {
        flexDirection: "row",
    },

    image: {
        height: 200,
        borderRadius: 20,
        resizeMode: "cover",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
    },

    source: {
        flex: 1,
        fontSize: 16,
        color: "gray",
    },

    calories: {
        fontSize: 16,
        color: "gray",
    },

    calorieIcon: {
        width: 16,
        height: 16,
        tintColor: "gray",
    },
});

export default RecipeCard;
