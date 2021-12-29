import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CheckBox from '@react-native-community/checkbox'
import Button from '../components/Button'

const PaymentScreen = ({ route: { params: { item } }}) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <Text style={{color: '#000000', textAlign: 'center', fontSize: 30, marginVertical: 20, fontWeight: 'bold'}}>Select Payment Method</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                    <CheckBox
                        tintColors={{true: '#ffc107'}}
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{}}
                    />
                    <Text style={{color: '#000000', fontSize: 20, marginLeft: 10}}>UPI</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                    <CheckBox
                        tintColors={{true: '#ffc107'}}
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{}}
                    />
                    <Text style={{color: '#000000', fontSize: 20, marginLeft: 10}}>Credit/Debit/ATM Card</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                    <CheckBox
                        tintColors={{true: '#ffc107'}}
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{}}
                    />
                    <Text style={{color: '#000000', fontSize: 20, marginLeft: 10}}>Net Banking</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                    <CheckBox
                        tintColors={{true: '#ffc107'}}
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{}}
                    />
                    <Text style={{color: '#000000', fontSize: 20, marginLeft: 10}}>Cash on Dilevery</Text>
                </View>

                 <View style={{alignItems: 'center', marginVertical: 20}}>
                    <Text style={{color: '#000000', fontSize: 24}}>Total Payable Amount:</Text>
                    <Text style={{color: 'grey', fontSize: 18}}>₹{item.price - item.price * (item.off/100)}</Text>
                </View>

                <View style={{alignSelf: 'center'}}>    
                    <Button buttontext="Confirm Booking" />
                </View>        
        </ScrollView>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({})
