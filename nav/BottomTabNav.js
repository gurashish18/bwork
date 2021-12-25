import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import MainScreen from '../Screens/MainScreen'
import BookingsScreen from '../Screens/BookingsScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Main Screen"
            screenOptions={{
                tabBarActiveTintColor: '#ffc107',
                headerShown: false,
                tabBarStyle: { backgroundColor: '#212121' },
            }}>
                <Tab.Screen
                    name="Main Screen"
                    component={MainScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={30} />
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
