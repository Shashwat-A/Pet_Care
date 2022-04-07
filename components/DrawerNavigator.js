import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen';
import DogScreen from '../screens/DogScreen';
import CatScreen from '../screens/CatScreen';
import FishScreen from '../screens/FishScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return(
        <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component={HomeScreen}/>
            <Drawer.Screen name = "Dogs" component={DogScreen}/>
            <Drawer.Screen name = "Cats" component={CatScreen}/>
            <Drawer.Screen name = "Fishes" component={FishScreen}/>
        </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNav;