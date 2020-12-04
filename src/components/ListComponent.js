import React from "react";
import {
    View,
    Text,
    FlatList,
	Image,
	StyleSheet
} from "react-native";

export default ListComponent = ({ data }) => (
    <FlatList
        data={data}
        renderItem={({ item }) => (
            <View style={styles.wrapper}>
                <Image
                    style={styles.image}
                    source={{
                        uri:
                            "https://i.vimeocdn.com/portrait/58832_300x300.jpg",
                    }}
                />
                <Text style={styles.text}>{item.name}</Text>
            </View>
        )}
        horizontal={true}
    />
);

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "beige",
        flexDirection: "column",
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: "black",
        borderWidth: 5,
    },
    text: {
        padding: 10,
        fontSize: 20,
        marginHorizontal: 10,
    },
    image: {
        width: "100%",
        height: 80,
        resizeMode: "cover",
    }
});
