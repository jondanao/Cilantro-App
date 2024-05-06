import { Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import Images from "@/app/assets/Images";

interface FavoriteButtonProps {
    style?: object;
    onPress?: () => void;
}

const FavoriteButton = (props: FavoriteButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, props.style]}
            onPress={props.onPress}
        >
            <Image source={Images.icons.heart} style={styles.icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45,
        borderRadius: 10,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        alignItems: "center",
        justifyContent: "center",
    },

    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        tintColor: "lime",
    },
});

export default FavoriteButton;
