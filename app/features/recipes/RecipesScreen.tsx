import { View, Text, TouchableOpacity } from "react-native";

const RecipesScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.push("RecipeScreen")}>
                <Text>Recipes Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RecipesScreen;
