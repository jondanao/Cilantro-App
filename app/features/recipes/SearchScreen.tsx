import { View, Text, TouchableOpacity } from "react-native";

const SearchScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.push("RecipeScreen")}>
                <Text>Search Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchScreen;
