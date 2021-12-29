import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ConfirmBooking from '../Screens/ConfirmBooking';

const CheckoutNav = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                <Stack.Screen name="Confirm" component={ConfirmBooking} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default CheckoutNav
