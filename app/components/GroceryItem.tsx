import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import Images from "@/app/assets/Images";

interface GroceryItemProps {
    text: string;
    onCheckPress?: () => void;
}

const GroceryItem = (props: GroceryItemProps) => {
    const [checked, setChecked] = useState(false);

    const onPress = () => {
        setChecked(!checked);
        setTimeout(() => {
            if (props.onCheckPress) {
                props.onCheckPress();
            }
        }, 200);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkButton} onPress={onPress}>
                {checked ? (
                    <Image
                        source={Images.icons.checkFilled}
                        style={styles.icon}
                    />
                ) : (
                    <Image
                        source={Images.icons.checkOutline}
                        style={styles.icon}
                    />
                )}
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
        tintColor: "green",
    },

    text: {
        fontSize: 16,
    },
});

export default GroceryItem;
