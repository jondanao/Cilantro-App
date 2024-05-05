import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./SearchScreen";
import RecipeScreen from "./RecipeScreen";

const Stack = createNativeStackNavigator();

const RecipesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ title: "Cilantro" }}
            />
            <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
        </Stack.Navigator>
    );
};

export default RecipesStack;
