import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./src/screens/HomeScreen";
import DateViewerScreen from "./src/screens/DateViewerScreen";
import DateReporterScreen from "./src/screens/DateReporterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileOptionsScreen from "./src/screens/ProfileOptionsScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ReportLocationScreen from "./src/screens/ReportScreens/ReportLocationScreen";
import ReportTypeScreen from "./src/screens/ReportScreens/ReportTypeScreen";
import ReportOffenderScreen from "./src/screens/ReportScreens/ReportOffenderScreen";
import ReportOtherScreen from "./src/screens/ReportScreens/ReportOtherScreen";
import ReportTimeScreen from "./src/screens/ReportScreens/ReportTimeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Report: DateReporterScreen,
    Viewer: DateViewerScreen,
    Login: LoginScreen,
    Profile: ProfileOptionsScreen,
    SignUp: SignUpScreen,
    Location: ReportLocationScreen,
    Type: ReportTypeScreen,
    Offender: ReportOffenderScreen,
    Other: ReportOtherScreen,
    Time: ReportTimeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
	  title: "App",
	  headerShown: false
    }
  }
);

export default createAppContainer(navigator);
