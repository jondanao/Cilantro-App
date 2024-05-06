import { View, StyleSheet, TextInput } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="search" size={24} color="gray" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Search" style={styles.textInput} />
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
        height: 80,
        padding: 12,
    },

    innerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
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
    },
});

export default SearchBar;
