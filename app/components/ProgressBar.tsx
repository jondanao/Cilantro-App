import { Modal, View, StyleSheet } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

interface ProgressBarProps {
    visible: boolean;
}

const ProgressBar = (props: ProgressBarProps) => {
    return (
        <Modal visible={props.visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.box}>
                    <Progress.CircleSnail
                        color={["#F44336", "#2196F3", "#009688"]}
                        indeterminate={true}
                        direction={"clockwise"}
                        spinDuration={1200}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },

    box: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ProgressBar;
