import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform, Dimensions, Button, Alert, Text, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, View, SafeAreaView, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Asset } from 'expo-asset';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import AppLoading from 'expo-app-loading';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


import HomePage from './HomePage';


// const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// test

function DetailsPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      /> */}
    </View>
  );
}

function LogoTitle({ title }) {
  return (
    <>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./assets/logo.png')}
      />
      <Text>{title}</Text>
    </>
  );
}

const TabNavigator = <Tab.Navigator
  initialRouteName={'Home'}
  // labeled={false}
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
      } else if (route.name === 'Details') {
        iconName = 'ios-list';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}
>
  <Tab.Screen name="Home" component={HomePage} options={{ tabBarBadge: 3 }} />
  <Tab.Screen name="Details" component={DetailsPage} />
</Tab.Navigator>;

// function HomeStackNavigator() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerRight: () => (
//           <Button
//             onPress={() => alert('This is a button!')}
//             title="Info"
//             color="#000000"
//           />
//         ),
//         headerShown: false
//       }}>
//       <Stack.Screen
//         name="Home"
//         component={WelcomePage}
//         options={{ headerTitle: props => <LogoTitle {...props} title='Home' /> }} />
//     </Stack.Navigator>
//   );
// }

// function DetailStackNavigator() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Detail"
//       screenOptions={{
//         headerRight: () => (
//           <Button
//             onPress={() => alert('This is a button!')}
//             title="Info"
//             color="#000000"
//           />
//         ),
//         headerShown: false
//       }}>
//       <Stack.Screen
//         name="Detail"
//         component={DetailsPage}
//         options={{ headerTitle: props => <LogoTitle {...props} title='Detail' /> }} />
//     </Stack.Navigator>
//   );
// }

// -------------------
export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _cacheResourcesAsync() {
    const images = [require('./assets/favicon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }

  render() {
    // const { landscape } = useDeviceOrientation();

    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
        background: '#eeffe6'
      },
    };

    // const tabNavigator = (initialRoute) => {
    //   return function () {
    //     return TabNavigator(initialRoute);
    //   }
    // }

    return (<PaperProvider theme={theme}>
      <StatusBar style='dark' backgroundColor='#eeffe6' />
      <NavigationContainer>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={tabNavigator('Home')} />
          <Drawer.Screen name="Details" component={tabNavigator('Detail')} />
        </Drawer.Navigator> */}
        {TabNavigator}
      </NavigationContainer>
    </PaperProvider>
    );
  }
}


 // <SafeAreaView style={styles.container}>
      //   <View style={{
      //     backgroundColor: 'dodgerblue',
      //     width: '100%',
      //     height: landscape ? '10%' : '30%'
      //   }}>
      //     {/* <Button
      //       color='orange'
      //       title='Click Me'
      //       onPress={() => Alert.alert('My Title', 'The message quoi', [{
      //         text: 'yes', onPress: () => { console.log('tapped yes') }
      //       }, { text: 'no', onPress: () => { console.log('tapped no') } }])}
      //     // onPress={() => Alert.prompt({ text: 'haha' })} NO WORK ON ANDROID
      //     /> */}
      //     <StatusBar style='dark' backgroundColor='lightgreen' />
      //   </View>
      // </SafeAreaView>

      // <View
      //   style={{
      //     backgroundColor: 'white',
      //     flex: 1,
      //     flexDirection: 'row',
      //     justifyContent: "center", //main axis
      //     alignItems: 'center', //secondary axis
      //     flexWrap: 'wrap',
      //     alignContent: "center"
      //   }}>
      //   <View style={{
      //     backgroundColor: 'blue',
      //     width: 100,
      //     height: 100
      //   }} />
      //   <View style={{
      //     backgroundColor: 'gold',
      //     width: 100,
      //     height: 100,
      //     bottom: 20
      //   }} />
      //   <View style={{
      //     backgroundColor: 'tomato',
      //     width: 100,
      //     height: 100
      //   }} />
      //   {/* <View style={{
      //   backgroundColor: 'grey',
      //   width: 100,
      //   height: 100
      // }} />
      // <View style={{
      //   backgroundColor: 'greenyellow',
      //   width: 100,
      //   height: 100
      // }} /> */}
      // </View>