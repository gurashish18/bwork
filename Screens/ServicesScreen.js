import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View,ImageBackground, TouchableOpacity,Dimensions, FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {data2} from '../API/api'

const WINDOW_WIDTH = Dimensions.get("window").width
const CARD_WIDTH = Math.round(WINDOW_WIDTH * 0.3)
const CARD_WIDTH2 = Math.round(WINDOW_WIDTH)

const ServicesScreen = ({ route: { params: { s } }}) => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{backgroundColor: '#000000'}}>
            <ImageBackground source={s.bannerimage} style={{width: '100%', height: 250, resizeMode: 'contain'}}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, color: '#ffffff', fontWeight: 'bold'}}>{s.job}</Text>
                </View>
            </ImageBackground>

            <View style={{margin: 10, backgroundColor: '#212121', borderRadius: 20, paddingVertical: 10}}>
                <Text style={{color: '#ffc107', fontSize: 24, marginLeft: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>Select a Service</Text>
                <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap'}}>
                        {s.services.map((item) => (
                            <TouchableOpacity key={item.id} style={{flexDirection: 'column', alignItems: 'center', width: '50%', padding: 5}} onPress={() => navigation.navigate("ServiceBook", {item})}>
                                <View>
                                    <Image source={item.imageuri} style={{height: 130,width: 130, resizeMode: 'contain', borderRadius: 10}} />
                                </View>
                                <View>
                                    <Text style={{color: '#ffffff'}}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default ServicesScreen

const styles = StyleSheet.create({})
