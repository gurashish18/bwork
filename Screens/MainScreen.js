import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
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
                                <View>
                                    <Image source={s.imageuri} style={{height: 60,width: 60, resizeMode: 'contain'}} />
                                </View>
                                <View>
                                    <Text style={{color: '#000000'}}>{s.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                </View>
            </View>

            <ImageSlider data={banner1}/> 

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

            <ImageSlider data={banner2}/>

            {/* <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',margin: 10, backgroundColor: '#212121', borderRadius: 20, padding: 10}}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Plumbers</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Electricians</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Carpenters</Text>
                </View>
                <Image source={require('../assets/people.png')} style={{height: 200, resizeMode: 'contain'}}/>
            </View> */}
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
