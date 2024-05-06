import { useState } from "react";
import {
    FlatList,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import SearchBar from "./components/SearchBar";

const RecipesScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");

    const onSearchChangeText = (text: string) => {
        setSearchText(text);
    };

    const onSearchSubmit = () => {
        console.log("Search submitted:", searchText);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <SearchBar
                    text={searchText}
                    onChangeText={onSearchChangeText}
                    onSubmitEditing={onSearchSubmit}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default RecipesScreen;
