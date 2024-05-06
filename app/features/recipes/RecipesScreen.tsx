import React, { useState } from "react";
import {
    FlatList,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import SearchBar from "../../components/SearchBar";
import RecipeCard from "../../components/RecipeCard";
import ProgressBar from "@/app/components/ProgressBar";

const RecipesScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [progressVisible, setProgressVisible] = useState(false);

    // Event handlers
    const onSearchChangeText = (text: string) => {
        setSearchText(text);
    };

    const onSearchSubmit = () => {
        fetchData();
    };

    const onRecipePress = () => {
        console.log("Recipe pressed");
    };

    // Private methods
    const fetchData = async () => {
        setProgressVisible(true);
        setTimeout(() => {
            setProgressVisible(false);
        }, 2000);
    };

    // Render methods
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <SearchBar
                    text={searchText}
                    onChangeText={onSearchChangeText}
                    onSubmitEditing={onSearchSubmit}
                />
                <ProgressBar visible={progressVisible} />
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
