import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import MainScreen from '../Screens/MainScreen'
import BookingsScreen from '../Screens/BookingsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ContactScreen from '../Screens/ContactScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Main Screen"
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                headerShown: false,
                tabBarStyle: { backgroundColor: '#ffffff' },
            }}>
                <Tab.Screen
                    name="Main Screen"
                    component={MainScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/logo.png')} style={{height: 30, width: 30, resizeMode: 'contain'}}/>
                        ),
                }}/>
                <Tab.Screen
                    name="Contact Screen"
                    component={ContactScreen}
                    options={{
                        tabBarLabel: 'Contact',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="local-phone" color={color} size={30} />
                        ),
                }}/>
                <Tab.Screen
                    name="Booking Screen"
                    component={BookingsScreen}
                    options={{
                        tabBarLabel: 'Bookings',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="library-books" color={color} size={30} />
                        ),
                        // tabBarBadge: 3,
                    }}/>
                <Tab.Screen
                    name="Profile Screen"
                    component={ProfileScreen}
                    options={{
                    tabBarLabel: 'My Profile',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="supervised-user-circle" color={color} size={30} />
                    ),
                }}/>
        </Tab.Navigator>
    )
}

export default BottomTabNav
