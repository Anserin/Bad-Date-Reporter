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
                <TouchableOpacity
                    style={styles.topButton}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}>
                    <Text style={styles.topButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.topButtonAbout}
                    onPress={() => {
                        navigation.navigate("About");
                    }}>
                    <Text style={styles.topButtonText}>About</Text>
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
        width: 250,
        marginBottom: 20,
        padding: 10,
        borderRadius: 100,
        alignItems: "center",
    },
    topButtonAbout: {
        top: 450,
        borderWidth: 3,
        borderColor: "gold",
        width: 250,
        marginBottom: 20,
        padding: 10,
        borderRadius: 100,
        alignItems: "center",
    },
    topButtonText: {
        color: "gold",
        fontWeight: "bold",
    },
});
