import React, {useState, useContext} from 'react'
import { ScrollView, StyleSheet, Text, View, ImageBackground, FlatList, Image, SafeAreaView, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { availableServices } from '../API/api'
import Button from '../components/Button'

const BookingsScreen = () => {
    const navigation = useNavigation()
    return (
        <FlatList
                style={{backgroundColor: '#ffffff'}}
                ListHeaderComponent={
                    <>
                        <Text style={{fontSize: 24, color:'#000000', paddingVertical: 20, marginLeft: 30, fontWeight: 'bold'}}>Your Booked Services</Text>
                    </>
                }
                horizontal={false} 
                data={availableServices.bookservices} 
                renderItem={({item, index}) => (
                    <SafeAreaView style={{padding: 10, margin: 10, borderRadius: 20, backgroundColor: '#eeeeee'}}>
                        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: 15}}>
                            <View>
                                <Text style={{color: '#FFB800', fontWeight:'bold', fontSize: 16}}>UP TO {item.off}% OFF</Text>
                                <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 16, color: 'grey'}}>{item.stars}</Text>
                                    <Icon name='star' size={24} style={{color: '#000000'}}/>
                                </View>
                                <Text style={{fontSize: 16, color: 'grey'}}>{item.rating}+ ratings</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: '#39C16C', fontSize: 20, fontWeight: 'bold', marginRight: 15}}>₹{item.price - item.price * (item.off/100)}</Text>
                                    <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold', marginRight: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>₹{item.price}</Text>
                                    <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold', marginRight: 15}}>.</Text>
                                    <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>{item.time} mins</Text>
                                </View>
                            </View>
                            <Pressable style={styles.container}>
                                <Text style={styles.text}>CANCEL REQUEST</Text>
                            </Pressable>
                        </View>
                    </SafeAreaView>
                )}
                keyExtractor={item => item.id}    
            />
    )
}

export default BookingsScreen

const styles = StyleSheet.create({
    container: {
        maxWidth: 300,
        backgroundColor: '#D0342C',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    text: {
        fontSize: 18,
        color: '#ffffff'
    }
})
