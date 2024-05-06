import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipesScreen from "./RecipesScreen";
import RecipeScreen from "./RecipeScreen";

const Stack = createNativeStackNavigator();

const RecipesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="RecipesScreen"
                component={RecipesScreen}
                options={{ title: "Cilantro" }}
            />
            <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
        </Stack.Navigator>
    );
};

export default RecipesStack;
