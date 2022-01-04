import React, {useState, useContext} from 'react'
import { ScrollView, StyleSheet, Text, View, ImageBackground, FlatList, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { availableServices } from '../API/api'
import Button from '../components/Button'
import Modal from "react-native-modal";
import CheckBox from '@react-native-community/checkbox'
import Icon from 'react-native-vector-icons/MaterialIcons'

const includes = [{text: "Installation, replacement or adjustment of upto two connection hoses"}, {text: "All hose types: PVC, rubberm textile steel"}, {text:"Procurement of extra parts (at extra cost)"}, {text:"Bowrk warranty and damage cover"}]


const slots = ["1pm to 2pm", "4pm to 6pm", "7pm to 8pm"]

const ServiceBookScreen = ({ route: { params: { item } }}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const [isSelected, setSelection] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation()
    return (
        <FlatList
                style={{backgroundColor: '#ffffff'}}
                ListHeaderComponent={
                    <>
                        <Text style={{fontSize: 24, color:'#000000', paddingVertical: 20, marginLeft: 30, fontWeight: 'bold'}}>Book your service</Text>


                        <Text style={{fontSize: 22, color:'#000000', paddingVertical: 20, marginLeft: 30}}>Includes</Text>
                        {includes.map((item) => (
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="done" style={{color: 'grey'}} size={25}/>
                                <Text style={{color: 'grey', fontSize: 18, padding: 10}}>{item.text}</Text>
                            </View>
                        ))}
                        
                    </>
                }
                horizontal={false} 
                data={item.booking} 
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
                            <Button buttontext="BOOK SERVICE" onPress={()=>navigation.navigate("Confirm", {item})}/>
                        </View>
                    </SafeAreaView>
                )}
                keyExtractor={item => item.id}    
            />
    )
}

export default ServiceBookScreen

const styles = StyleSheet.create({})
