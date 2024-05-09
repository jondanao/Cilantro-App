import {
    FlatList,
    LayoutAnimation,
    Platform,
    UIManager,
    View,
    StyleSheet,
} from "react-native";
import React from "react";
import { observer } from "mobx-react";

import { useAppStore, IGroceryItem } from "@/app/models/AppStore";
import GroceryItem from "@/app/components/GroceryItem";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const GroceryScreen = () => {
    const appStore = useAppStore();

    // Event handlers
    const onGroceryItemPress = (item: IGroceryItem) => {
        appStore.toggleGroceryItem(item);
    };

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    return (
        <View style={styles.container}>
            <FlatList
                data={appStore.groceryList.slice()}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <GroceryItem
                        text={item.text}
                        onCheckPress={() => onGroceryItemPress(item)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default observer(GroceryScreen);
