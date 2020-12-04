import React from "react";
import { Toolbar } from "react-native-material-ui";

export default function Header({
    menuIcon,
    backgroundColor,
    handleMenuPressed,
}) {
    return (
        <Toolbar
            style={{
                container: {
                    backgroundColor,
					marginBottom: 56
                },
            }}
            leftElement={menuIcon}
            onLeftElementPress={() => handleMenuPressed()}
            centerElement="Bad Date Reporter"
        />
    );
}
