import { StyleSheet, View } from "react-native";
import SearchBar from "./components/SearchBar";

const RecipesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SearchBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default RecipesScreen;
