import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Images from "@/app/assets/Images";

interface GroceryItemProps {
    text: string;
    onCheckPress?: () => void;
}

const GroceryItem = (props: GroceryItemProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.checkButton}
                onPress={props.onCheckPress}
            >
                <Image source={Images.icons.checkOutline} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        height: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },

    checkButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    icon: {
        width: 20,
        height: 20,
    },

    text: {
        fontSize: 16,
    },
});

export default GroceryItem;
