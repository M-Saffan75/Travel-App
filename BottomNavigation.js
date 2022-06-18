import { StyleSheet, Text, View, color } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import CartScreen from './CartScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
    return (
        <Tab.Navigator tabBarOptions={{ style: { height: 55, borderTopWidth: 0, elevation: 0 }, showLabel: false, activeTintColor: '#f47e39', }} screenOptions={{ headerShown: false }}>
            <Tab.Screen name="house-user" component={Home} options={{ tabBarIcon: () => (<FontAwesome5 color={'#f47e39'} size={28} name='house-user' />) }} />
            <Tab.Screen name="briefcase" component={Home} options={{ tabBarIcon: () =>  (<FontAwesome5 color={'#000'} size={28} name='briefcase' />) }} />
            <Tab.Screen name="search" component={Home} options={{
                tabBarIcon: () => (
                    <View style={{ height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderColor: '#f47e39', borderWidth: 2, borderRadius: 30, backgroundColor: '#fff', color: '#fff', top: -25 }}>
                        <FontAwesome5 color={'#f47e39'} size={28} name='search'/></View>
                )
            }} />
            <Tab.Screen name="heart" component={Home} options={{ tabBarIcon: () => (<FontAwesome5 color={'#000'} size={28} name='heart' />) }} />
            <Tab.Screen name="shopping-cart" component={CartScreen} options={{ tabBarIcon: () => (<FontAwesome5 color={'#f47e39'} size={28} name='shopping-cart' />) }} />
        </Tab.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})
