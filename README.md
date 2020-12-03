# Bad Date Reporter README.md File for Grader

First off, we couldn't figure out how to get this to run on web. If you want to try to get it to run, there will be a section

## Running the App on Your Phone

### First Time Setup

First, you must install node.js from [here](https://nodejs.org/en/download/ "Node.js Download Page")

Next, from the command line, cd into the Bad-Date-Reporter directory.

From here you will have to run the command "npm install -g expo-cli"

This should allow you to continue installing the dependencies.

### Installing dependencies

Run the following commands:

* npm install react-navigation
* npm install react-navigation-stack
* npm install @react-native-community/masked-view
* npm install @react-native-community/checkbox
* npm install react-native-gesture-handler
* npm install react-native-reanimated
* npm install react-native-screens
* npm install react-native-safe-area-context

This should install all the required dependencies

### Running the App

Once all of the above is done, running the command "expo start" should boot up a LAN connection to be able to run the app from your phone using the EXPO app. Pressing "w" after the connection has been established should try to run it on the web, though we had no success getting this to run correctly.

From the app, you should have access to scan the QR code that is generated in both the command line and on the browser page that is generated. On an iOS device, you'll have to press 's' in the command line, sign up and get the project saved in the app to access it as they removed the QR code access from the app on iOS only.

### Where to Access the Project

By clicking the "view" button you will access the section of the app we are using as our project submission.
