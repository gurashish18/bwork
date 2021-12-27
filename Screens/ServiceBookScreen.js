import React, {useState, useContext} from 'react'
import { ScrollView, StyleSheet, Text, View, ImageBackground, FlatList, Image, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { availableServices } from '../API/api'
import Button from '../components/Button'

const slots = ["1pm to 2pm", "4pm to 6pm", "7pm to 8pm"]

const ServiceBookScreen = ({ route: { params: { item } }}) => {
    const navigation = useNavigation()
    return (
        <FlatList
                style={{backgroundColor: '#000000'}}
                ListHeaderComponent={
                    <>
                        <Text style={{fontSize: 24, color:'#ffffff', paddingVertical: 20, marginLeft: 30, fontWeight: 'bold'}}>Book your service</Text>
                        <Text style={{color: 'lightgrey', fontSize: 18, padding: 10}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae consectetur accusantium dicta at dolore veritatis qui sit odit optio, nulla quos tempora sapiente quaerat placeat fugiat. Eum ipsa sunt minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus, nostrum sint, animi iste officia dolor nobis obcaecati optio laborum voluptatum eum est quae pariatur harum nulla, provident voluptate. Quo!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a nam ea dolorum rerum praesentium. Cumque eaque ipsum deserunt minima tempora ratione. Nihil harum dolorem laborum tempora eveniet. Maxime ipsam minima nobis a reprehenderit amet</Text>
                    </>
                }
                horizontal={false} 
                data={item.booking} 
                renderItem={({item, index}) => (
                    <SafeAreaView style={{padding: 10, margin: 10, borderRadius: 20, backgroundColor: '#212121'}}>
                        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: 15}}>
                            <View>
                                <Text style={{color: '#FFB800', fontWeight:'bold', fontSize: 16}}>UP TO {item.off}% OFF</Text>
                                <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 16, color: 'grey'}}>{item.stars}</Text>
                                    <Icon name='star' size={24} style={{color: '#ffffff'}}/>
                                </View>
                                <Text style={{fontSize: 16, color: 'grey'}}>{item.rating}+ ratings</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: '#39C16C', fontSize: 20, fontWeight: 'bold', marginRight: 15}}>₹{item.price - item.price * (item.off/100)}</Text>
                                    <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginRight: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>₹{item.price}</Text>
                                    <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginRight: 15}}>.</Text>
                                    <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>{item.time} mins</Text>
                                </View>
                            </View>
                            <Button buttontext="BOOK SERVICE"/>
                        </View>
                    </SafeAreaView>
                )}
                keyExtractor={item => item.id}    
            />
    )
}

export default ServiceBookScreen

const styles = StyleSheet.create({})
