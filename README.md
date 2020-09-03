# NeatEat Apps

This holds the code for the main NeatEats build.


## How to build locally

Prerequisits:

1. Have node installed
1. Have react-native installed
1. Have expo cli installed

Building:

1. Clone the repo
1. run the command `expo start` from within the directory


## Build
```bash
# Create the NeatEats directory
react-native init NeatEats 
```

Installing Needed npm modules. Must do this for each for each `expo init <project>`.

```bash
# Node Dependencies 
npm install -g create-react-native-app
npm install -g expo-cli

# Install react-native globally
npm install -g react-native-cli

# Install the navigation tool inside the NeatEats created folder
# Install the icons tool from react-native inside the NeatEats created folder
npm install react-navigation;
npm install react-native-elements;
npm install react-native-gesture-handler;
npm install react-native-reanimated;
npm install react-native-screens;
npm install react-native-safe-area-context;
npm install @react-native-community/masked-view;
npm install @react-navigation/stack;
npm install @react-navigation/native@^5.0.5;
npm install @react-navigation/bottom-tabs;
npm install react-native-vector-icons;

# Linking the libraries
react-native link react-native-vector-icons;
react-native link react-native-gesture-handler;
react-native link react-native-elements;
react-native link react-native-reanimated;
react-native link react-native-screens;
react-native link react-native-safe-area-context;
react-native link @react-native-community/masked-view;
react-native link @react-navigation/stack;
react-native link @react-navigation/native@^5.0.5;
react-native link @react-navigation/bottom-tabs;
react-native link react-native-vector-icons;
```

## Cleaning up NPM

```bash
rm -rf node_modules package-lock.lock
npm cache clean --force
npm install
```


## Sources 
- [Getting Started with Cordova](https://ccoenraets.github.io/cordova-tutorial/create-cordova-project.html)
- [Getting Started with ReactNative](https://medium.com/mesan-digital/how-to-build-a-news-app-with-react-native-app-part-1-e78d7d3c55b3)
- [Fixing package export error](https://stackoverflow.com/questions/61151879/launch-error-caused-by-react-navigation-bottom-tabs-5-x)




