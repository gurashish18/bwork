import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen';
import OTPloginScreen from '../Screens/OTPloginScreen';
import OTPverifyScreen from '../Screens/OTPverifyScreen';
import BottomTabNav from './BottomTabNav'


const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Onboard" component={OnboardScreen} />
                    <Stack.Screen name="OTPlogin" component={OTPloginScreen} />
                    <Stack.Screen name="OTPverify" component={OTPverifyScreen} />
                    <Stack.Screen name="BottomTab" component={BottomTabNav} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation