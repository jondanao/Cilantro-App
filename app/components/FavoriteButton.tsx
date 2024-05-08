import { Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import Images from "@/app/assets/Images";

interface FavoriteButtonProps {
    style?: object;
    isOn?: boolean;
    onPress?: () => void;
}

const FavoriteButton = (props: FavoriteButtonProps) => {
    const icon = props.isOn
        ? Images.icons.heartFilled
        : Images.icons.heartOutline;

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, props.style]}
            onPress={props.onPress}
        >
            <Image source={icon} style={styles.icon} />
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
