import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen';
import OTPloginScreen from '../Screens/OTPloginScreen';
import OTPverifyScreen from '../Screens/OTPverifyScreen';
import BottomTabNav from './BottomTabNav'
import ServicesScreen from '../Screens/ServicesScreen'
import ServiceBookScreen from '../Screens/ServiceBookScreen'
import EditProfileScreen from '../Screens/EditProfileScreen'
import AddAddressScreen from '../Screens/AddAddressScreen'
import InsuranceScreen from '../Screens/InsuranceScreen'
import ConfirmBooking from '../Screens/ConfirmBooking';
import PaymentScreen from '../Screens/PaymentScreen'

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Onboard" component={OnboardScreen} />
                    <Stack.Screen name="OTPlogin" component={OTPloginScreen} />
                    <Stack.Screen name="OTPverify" component={OTPverifyScreen} />
                    <Stack.Screen name="BottomTab" component={BottomTabNav} />
                    <Stack.Screen name="Insurance" component={InsuranceScreen} />
                    <Stack.Screen name="Services" component={ServicesScreen} />
                    <Stack.Screen name="ServiceBook" component={ServiceBookScreen} />
                    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                    <Stack.Screen name="AddAddress" component={AddAddressScreen} />
                    <Stack.Screen name="Confirm" component={ConfirmBooking} />
                    <Stack.Screen name="Payment" component={PaymentScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation