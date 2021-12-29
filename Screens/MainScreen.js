import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import UserLocation from '../components/UserLocation'
import SearchBar from '../components/SearchBar'
import ImageSlider from '../components/ImageSlider'
import { offers } from '../API/api'
import {data, newdata, specialServices, banner1, banner2, applianceServices} from '../API/api'
import {useNavigation} from '@react-navigation/native'



const MainScreen = () => {
    
    const navigation = useNavigation()
    return (
        <FlatList
                style={{backgroundColor: '#ffffff'}}
                ListHeaderComponent={
                    <>
                        <UserLocation />

                        <View>
                            <SearchBar />
                        </View>

                        <ImageSlider data={offers}/>
                    </>
                }
                horizontal={false} 
                data={newdata}
                numColumns={4}  
                renderItem={({item, index}) => (
                    <TouchableOpacity key={item.id} style={{flexDirection: 'column', alignItems: 'center',justifyContent: 'center',  padding: 5, width: '25%'}} onPress={() => navigation.navigate("Services", {item})}>
                        <View style={{backgroundColor: '#000000', padding: 3, borderRadius: 10}}>
                            <Image source={item.imageuri} style={{height: 60,width: 60, resizeMode: 'contain'}} />
                        </View>
                        <View>
                            <Text style={{color: '#000000'}}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <>
                        <Image source={require('../assets/banner1.jpg')} style={{height: 200, width: '100%', resizeMode: 'stretch'}}/>
                        <View style={{flex:1,margin: 10, backgroundColor: '#eeeeee', borderRadius: 20, paddingVertical: 10, position: 'relative',zIndex: -1}}>
                            <Text style={{...styles.title, color: '#000000', textAlign: 'center', marginBottom: 20}}>Appliance Services</Text>
                            <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap'}}>
                                    {applianceServices.map((item) => (
                                        <TouchableOpacity key={item.id} style={{flexDirection: 'column', alignItems: 'center', width: '50%', padding: 5, position: 'relative', zIndex: -1}} onPress={() => navigation.navigate("ServiceBook", {item})}>
                                            <View>
                                                <Image source={item.imageuri} style={{height: 100,width: 100, resizeMode: 'contain'}} />
                                            </View>
                                            <View>
                                                <Text style={{color: '#000000'}}>{item.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                            </View>
                        </View>

                        <Image source={require('../assets/banner1.jpg')} style={{height: 200, width: '100%', resizeMode: 'stretch'}}/>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: 10, backgroundColor: '#eeeeee', borderRadius: 20, paddingVertical: 10}}>
                            <Image source={require('../assets/logo.png')} style={{height: 80, width: 80, resizeMode: 'contain'}}/>
                            <View style={{width: 250}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: '#000000'}}>Bowrk Insurance Protection Program</Text>
                                <Text style={{marginBottom: 5, color: '#000000'}}>Upto Rs.10,0000 insurance protection with every service request</Text>
                                <Text style={{color: '#0066FF'}} onPress={() => navigation.navigate("Insurance")}>Learn More...</Text>
                            </View>
                        </View>

                        <Image source={require('../assets/banner2.jpg')} style={{height: 120, width: '100%', resizeMode: 'contain', marginBottom: 10}}/>
                    </>
                }    
            />
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
