import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

interface NumberSpinnerProps {
    value: number;
    onChange?: (value: number) => void;
}

const NumberSpinner = (props: NumberSpinnerProps) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(props.value);
    }, []);

    // Event handlers
    const onSubtractPress = () => {
        const newValue = value - 1;

        if (newValue > -1) {
            setValue(newValue);
        }
    };

    const onAddPress = () => {
        const newValue = value + 1;
        setValue(newValue);
    };

    // Private methods

    // Render methods
    return (
        <View style={styles.container}>
            <Text style={styles.yieldLabel}>YIELD</Text>
            <View style={styles.spinnerContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSubtractPress()}
                >
                    <Text style={styles.buttonLabel}>-</Text>
                </TouchableOpacity>
                <Text style={styles.valueLabel}>{value}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onAddPress()}
                >
                    <Text style={styles.buttonLabel}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },

    spinnerContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: 100,
        height: 30,
        borderWidth: 1,
        borderColor: "#888888",
        borderRadius: 8,
        marginLeft: 10,
    },

    yieldLabel: {
        fontSize: 12,
    },

    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonLabel: {
        fontSize: 18,
    },

    valueLabel: {
        flex: 1,
        textAlign: "center",
    },
});

export default NumberSpinner;
