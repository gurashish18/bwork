import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {useNavigation} from '@react-navigation/native'
import Button from '../components/Button'
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const OTPverifyScreen = ({ route: { params: { phoneNumber } }}) => {
    const navigation = useNavigation()
    const [otp, setotp] = useState('')
    const [confirm, setConfirm] = useState(null);
    const[spinner, setspinner] = useState(false) 

    useEffect(() => {
      signInWithPhoneNumber();
    }, [])

    async function signInWithPhoneNumber() {
      setspinner(true)
      try{
         const code = '+91'
         const pno = code.concat(" ", phoneNumber)
         console.log(pno)
         const confirmation = await auth().signInWithPhoneNumber(pno);
         setConfirm(confirmation);
       }catch(e){
          console.log(e)
      }
      setspinner(false)
     }
     async function confirmCode() {
      setspinner(true)
      try{
        const response = await confirm.confirm(otp);
        if(response){
          navigation.navigate("BottomTab")
        }
      } catch(e){
          console.log(e)
      }
      setspinner(false)
    }
    return (
        <View style={{flex:1, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center'}}>
            <Spinner
              visible={spinner}
              textContent={'Loading...'}
              textStyle={{}}
            />
            <Text style={{fontSize: 20, color: '#ffffff'}}>Enter code here</Text>
            <OTPInputView
                style={{width: '80%', height: 200}}
                pinCount={6}
                code={otp}
                onCodeChanged = {code => setotp(code)}
                autoFocusOnLoad
                codeInputFieldStyle={{...styles.underlineStyleBase, borderColor: '#ffffff'}}
                codeInputHighlightStyle={{borderColor: '#3284FF'}}
                onCodeFilled = {code => {} }
            />
            <Button onPress={() => confirmCode()} buttontext="Verify"/>
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
