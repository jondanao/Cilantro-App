import { Image, View, StyleSheet, Text } from "react-native";
import React from "react";

import Images from "@/app/assets/Images";

interface NutrientLabelProps {
    icon: string;
    value: string;
}

const NutrientLabel = (props: NutrientLabelProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={Images.icons[props.icon]} style={styles.icon} />
            </View>
            <Text style={styles.nutrientValue}>{props.value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    iconContainer: {
        width: 45,
        height: 45,
        borderRadius: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        alignItems: "center",
        justifyContent: "center",
    },

    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },

    nutrientValue: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: "gray",
    },
});

export default NutrientLabel;
