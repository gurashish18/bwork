import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import UserLocation from '../components/UserLocation'
import SearchBar from '../components/SearchBar'
import ImageSlider from '../components/ImageSlider'
import { offers } from '../API/api'
import {data, newdata, specialServices, banner1, banner2} from '../API/api'
import {useNavigation} from '@react-navigation/native'



const MainScreen = () => {
    
    const navigation = useNavigation()
    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <UserLocation />

            <View>
                <SearchBar />
            </View>

            <ImageSlider data={offers}/>

            <View style={{flex:1,margin: 10, backgroundColor: '#eeeeee', borderRadius: 20, paddingVertical: 10, position: 'relative',zIndex: -1}}>
                <Text style={{...styles.title, color: '#000000', textAlign: 'center', marginBottom: 20}}>Services</Text>
                <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap'}}>
                        {newdata.map((s) => (
                            <TouchableOpacity key={s.id} style={{flexDirection: 'column', alignItems: 'center', width: '25%', padding: 5}} onPress={() => navigation.navigate("Services", {s})}>
                                <View style={{backgroundColor: '#000000', padding: 3, borderRadius: 10}}>
                                    <Image source={s.imageuri} style={{height: 60,width: 60, resizeMode: 'contain'}} />
                                </View>
                                <View>
                                    <Text style={{color: '#000000'}}>{s.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                </View>
            </View>

            <Image source={require('../assets/banner1.jpg')} style={{height: 200, width: '100%', resizeMode: 'stretch'}}/>

            <View style={{flex:1,margin: 10, backgroundColor: '#eeeeee', borderRadius: 20, paddingVertical: 10, position: 'relative',zIndex: -1}}>
                <Text style={{...styles.title, color: '#000000', textAlign: 'center', marginBottom: 20}}>Special Services</Text>
                <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap'}}>
                        {specialServices.map((s) => (
                            <TouchableOpacity key={s.id} style={{flexDirection: 'column', alignItems: 'center', width: '50%', padding: 5}} onPress={() => navigation.navigate("Services", {s})}>
                                <View>
                                    <Image source={s.bannerimage} style={{height: 100,width: 100, resizeMode: 'contain'}} />
                                </View>
                                <View>
                                    <Text style={{color: '#000000'}}>{s.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                </View>
            </View>

            <Image source={require('../assets/banner2.jpg')} style={{height: 120, width: '100%', resizeMode: 'contain', marginBottom: 10}}/>
        </ScrollView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20
    },
})
