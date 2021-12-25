import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {useNavigation} from '@react-navigation/native'
import Button from '../components/Button'

const OTPverifyScreen = () => {
    const navigation = useNavigation()
    const [otp, setotp] = useState('')
    return (
        <View style={{flex:1, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: '#ffffff'}}>Enter code here</Text>
            <OTPInputView
                style={{width: '80%', height: 200}}
                pinCount={4}
                code={otp}
                onCodeChanged = {code => setotp(code)}
                autoFocusOnLoad
                codeInputFieldStyle={{...styles.underlineStyleBase, borderColor: '#ffffff'}}
                codeInputHighlightStyle={{borderColor: '#3284FF'}}
                onCodeFilled = {code => {} }
            />
            <Button onPress={() => navigation.navigate("BottomTab")} buttontext="Verify"/>
        </View>
    )
}

export default OTPverifyScreen

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
      },
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
      },
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
})
