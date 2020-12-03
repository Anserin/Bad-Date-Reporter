import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import SideMenu from "react-native-side-menu";

export default function HamburgerMenu({
    isOpen,
    navigation,
    children,
    onChange,
}) {
    const menu = (
        <MenuContentView navigation={navigation} showOverlay={isOpen} />
    );

    return (
        <SideMenu isOpen={isOpen} menu={menu} onChange={onChange}>
            {children}
        </SideMenu>
    );
}

function MenuContentView({ navigation }) {
    return (
        <>
            <View style={styles.menuContentWrapper}>
                <TouchableOpacity
                    style={styles.topButton}
                    onPress={() => {
                        navigation.navigate("SignUp");
                    }}>
                    <Text style={styles.topButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    menuContentWrapper: {
        width: 500,
        height: "100%",
        backgroundColor: "#560e02",
        padding: 10,
    },
    topButton: {
        borderWidth: 3,
        borderColor: "gold",
        width: 100,
        padding: 10,
        borderRadius: 100,
        alignItems: "center",
    },
    topButtonText: {
        color: "gold",
        fontWeight: "bold",
    },
});
