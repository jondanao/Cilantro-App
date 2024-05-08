import { FlatList, View, StyleSheet } from "react-native";
import React from "react";
import { observer } from "mobx-react";

import { appStore, IGroceryItem } from "@/app/models/AppStore";
import GroceryItem from "@/app/components/GroceryItem";

const GroceryScreen = () => {
    const onGroceryItemPress = (item: IGroceryItem) => {
        appStore.toggleGroceryItem(item);
    };

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
