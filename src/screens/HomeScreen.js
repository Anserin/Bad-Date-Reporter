import React, { useState } from "react";
import {
    View,
    Button,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    StatusBar,
    Image,
} from "react-native";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/Header";
import ListComponent from "../components/ListComponent";

const HEADER_COLOR = "maroon";
const MENU_STATE = {
    open: { isOpen: true, icon: "close" },
    close: { isOpen: false, icon: "menu" },
};

const HomeScreen = function ({ navigation }) {
    const [food, setFood] = useState([
        {
            name: "Blue Door Soup Kitchen",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "1",
        },
        {
            name: "Sudbury Food Pantry",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "2",
        },
        {
            name: "Myths & Mirrors",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "3",
        },
        {
            name: "Elgin Street Mission",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "4",
        },
        {
            name: "Melborough Emergency Food Pantries",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "5",
        },
    ]);
    const [shelter, setShelter] = useState([
        {
            name: "Womens Shelter",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "1",
        },
        {
            name: "Foyer Notre Dame House",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "2",
        },
        {
            name: "Elizabeth Fry Society",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "3",
        },
        {
            name: "Samaritan Centre",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "4",
        },
        {
            name: "Genervra House",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "5",
        },
        {
            name: "Sudbury Action Centre for Youth",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "6",
        },
    ]);
    const [clothing, setClothing] = useState([
        {
            name: "Better Beginnings Better Futures",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "1",
        },
        {
            name: "Northern Reflections",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "2",
        },
        {
            name: "Salvation Army",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "3",
        },
        {
            name: "Risseau Access",
            imageURL:
                "https://pbs.twimg.com/profile_images/1180118121752825856/OI_TCbGb.jpg",
            key: "4",
        },
    ]);

    const [menuState, setMenuState] = useState(MENU_STATE.close);

    function handleMenuState(isOpen) {
        let state = isOpen ? MENU_STATE.open : MENU_STATE.close;
        setMenuState(state);
    }

    return (
        <HamburgerMenu
            navigation={navigation}
            isOpen={menuState.isOpen}
            onChange={(isOpen) => handleMenuState(isOpen)}>
            <View style={styles.content}>
                <StatusBar barStyle="light-content" backgroundColor="#6b0901" />
                <Header
                    backgroundColor={HEADER_COLOR}
                    menuIcon={menuState.icon}
                    handleMenuPressed={() => handleMenuState(!menuState.isOpen)}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate("Report");
                        }}>
                        <Text>Report</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate("Viewer");
                        }}>
                        <Text>View</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ListComponent data={food} />
                    <ListComponent data={shelter} />
                    <ListComponent data={clothing} />
                </View>
            </View>
        </HamburgerMenu>
    );
};


const styles = StyleSheet.create({
    header: {
        width: 500,
        height: 125,
        backgroundColor: "maroon",
    },
    content: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        bottom: 30,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 90,
        backgroundColor: "lightblue",
        color: "#20232a",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        height: 100,
        width: 200,
        alignItems: "center",
    },
    topButton: {
        borderWidth: 6,
        borderColor: "gold",
        width: 65,
    },
});

export default HomeScreen;
