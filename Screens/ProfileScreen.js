import React, { useContext } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: '1',
        icon: 'message',
        text: 'Help Center',
        dest: 'Help'
    },
    {
        id: '2',
        icon: 'share',
        text: 'Share BWORK',
        dest: 'Share'
    },
    {
        id: '5',
        icon: 'star',
        text: 'Rate us',
        dest: 'GiftCard'
    },
    {
        id: '6',
        icon: 'settings',
        text: 'Settings',
        dest: 'Settings'
    },
]

const ProfileScreen = () => {
    const navigation = useNavigation()
    return (
        <FlatList
                style={{backgroundColor: '#000000'}}
                ListHeaderComponent={
                    <>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20}}>
                            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 24, color: '#ffffff', marginBottom: 10}}>Verified Customer</Text>
                                <Text style={{color: 'grey'}}>+91-978974578</Text>
                            </View>
                            <View>
                                <Icon name="edit" size={28} style={{color:'#ffffff'}}/>
                            </View>
                        </View>
                    </>
                    }
                horizontal={false} 
                data={data} 
                renderItem={({item, index}) => (
                    <TouchableOpacity style={{backgroundColor: '#212121', flexDirection: 'row', alignItems: 'center', paddingVertical: 20, margin: 10, borderRadius: 20 }}>
                        <Icon name={item.icon} size={30} style={{paddingHorizontal: 20, color:'#ffffff'}}/>
                        <Text style={{fontSize: 18, color:'#ffffff'}}>{item.text}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <>
                        {/* <View style={{flex: 1,alignItems: 'center',justifyContent:'center', marginVertical: 20}}>
                            <Switch
                                trackColor={{ false: "#000000", true: "#81b0ff" }}
                                thumbColor={darkMode ? "#f5dd4b" : "#ffffff"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={darkMode}
                                style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                            />
                        </View>

                        <View style={{ alignItems: 'center', borderRadius: 30, padding: 20, marginHorizontal: 50, backgroundColor: '#D0342C', marginVertical: 20}}>
                            <Text style={{fontSize: 18,color: '#ffffff', fontWeight: 'bold'}}>Logout</Text>
                        </View> */}
                    </>
                }    
            />
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
