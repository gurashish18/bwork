import React from 'react'
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/Button'
import {useNavigation} from '@react-navigation/native'

const ConfirmBooking = ({ route: { params: { item } }}) => {
    const navigation = useNavigation()
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <Text style={{fontSize: 30, color: '#000000', fontWeight: 'bold',alignSelf: 'center', marginVertical: 20}}>Confirm Booking</Text>
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: 15}}>
                <View>
                    <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, color: 'grey'}}>{item.stars}</Text>
                        <Icon name='star' size={24} style={{color: '#000000'}}/>
                    </View>
                    <Text style={{fontSize: 16, color: 'grey'}}>{item.rating}+ ratings</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold', marginRight: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>₹{item.price}</Text>
                        <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>{item.time} mins</Text>
                    </View>
                    <Text style={{color: '#39C16C', fontSize: 20, fontWeight: 'bold', marginRight: 15}}>Total payable amount: ₹{item.price - item.price * (item.off/100)}</Text>
                </View>
                <Button buttontext="Pay now" onPress={()=>navigation.navigate("Payment", {item})}/>
                <Pressable  style={styles.container} onPress={()=>navigation.goBack()}>
                    <Text style={styles.text}>Cancel</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default ConfirmBooking

const styles = StyleSheet.create({
    container: {
        width: '60%',
        maxWidth: 300,
        backgroundColor: '#D0342C',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
        color: '#ffffff'
    }
})
