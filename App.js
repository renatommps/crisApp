import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends React.Component {

  createDrawer = () =>
    <Drawer.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Drawer.Screen name="Home" component={Home}/>
    </Drawer.Navigator>

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={Home}
            options = {{
              headerTransparent:true,
              headerLeft : () => (
                <Image source={require('./assets/favicon.png')}/>
              ),
              title : '',
              headerRight : () => (
                <Image source={require('./assets/favicon.png')} style={{marginHorizontal: 20, marginTop: 40}}/>
              )
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

