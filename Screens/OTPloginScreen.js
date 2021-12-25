import React, {useContext, useState, useRef} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import PhoneInput from "react-native-phone-number-input";
import Button from '../components/Button'
import {useNavigation} from '@react-navigation/native'


const OTPloginScreen = () => {
    const navigation = useNavigation()

    const [phoneNumber, setphoneNumber] = useState("");
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);

    return (
        <View style={{...styles.container, backgroundColor: '#000000'}}>
            <Text style={{fontSize: 24, marginBottom: 15, fontWeight: '900', color: '#ffffff', textAlign: 'center'}}>Enter Phone number to get verified.</Text>
            <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="IN"
                layout="first"
                onChangeText={(text) => {
                setphoneNumber(text);
                }}
                onChangeFormattedText={(text) => {
                setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
          />
          <Button onPress={()=>navigation.navigate("OTPverify")} buttontext="Request OTP"/>
        </View>
    )
}

export default OTPloginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
})