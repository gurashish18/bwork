import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Linking} from 'react-native'

const ContactScreen = () => {
    const phoneNumber = +91-8002134202
    return (
        <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24, color: '#000000', fontWeight: 'bold', marginBottom: 40}}>Contact us</Text>
            <View>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}} onPress={() => Linking.openURL('geo:37.484847,-122.148386')}>
                    <Icon name="location-on" color="#000000" size={30}/>
                    <Text style={{color: '#000000', fontSize: 18}}>Baliya, Biroul</Text>
                    <Text style={{color: '#000000', fontSize: 18}}>Darbhanga, Bihar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}} onPress={() => Linking.openURL('mailto:bihariworkofficial@gmail.com')}>
                    <Icon name="email" color="#000000" size={30}/>
                    <Text style={{color: '#000000', fontSize: 18}}>Email: bihariworkofficial@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}} onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
                    <Icon name="local-phone" color="#000000" size={30}/>
                    <Text style={{color: '#000000', fontSize: 18}}>Call: +91-8002134202</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({})
