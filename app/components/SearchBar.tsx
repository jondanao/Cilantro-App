import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

interface SearchBarProps {
    placeholder?: string;
    text?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: () => void;
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="search" size={24} color="gray" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={props.placeholder ?? "Search"}
                        value={props.text}
                        style={styles.textInput}
                        returnKeyType="search"
                        onChangeText={props.onChangeText}
                        onSubmitEditing={props.onSubmitEditing}
                    />
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="sliders" size={24} color="gray" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingTop: 12,
        paddingLeft: 20,
        paddingRight: 20,
    },

    innerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 30,
    },

    iconContainer: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },

    inputContainer: {
        flex: 1,
    },

    textInput: {
        fontSize: 16,
        flex: 1,
    },
});

export default SearchBar;
