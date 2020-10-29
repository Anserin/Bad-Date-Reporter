import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./src/screens/HomeScreen";
import DateViewerScreen from "./src/screens/DateViewerScreen";
import DateReporterScreen from "./src/screens/DateReporterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileOptionsScreen from "./src/screens/ProfileOptionsScreen";
import ResourcesScreen from "./src/screens/ResourcesScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Report: DateReporterScreen,
    Viewer: DateViewerScreen,
    Login: LoginScreen,
    Profile: ProfileOptionsScreen,
    Resources: ResourcesScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
