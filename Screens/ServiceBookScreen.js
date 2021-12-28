import React, {useState, useContext} from 'react'
import { ScrollView, StyleSheet, Text, View, ImageBackground, FlatList, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { availableServices } from '../API/api'
import Button from '../components/Button'
import Modal from "react-native-modal";
import CheckBox from '@react-native-community/checkbox'
import Icon from 'react-native-vector-icons/MaterialIcons'


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
                        <Text style={{color: 'grey', fontSize: 18, padding: 10}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae consectetur accusantium dicta at dolore veritatis qui sit odit optio, nulla quos tempora sapiente quaerat placeat fugiat. Eum ipsa sunt minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus, nostrum sint, animi iste officia dolor nobis obcaecati optio laborum voluptatum eum est quae pariatur harum nulla, provident voluptate. Quo!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a nam ea dolorum rerum praesentium. Cumque eaque ipsum deserunt minima tempora ratione. Nihil harum dolorem laborum tempora eveniet. Maxime ipsam minima nobis a reprehenderit amet</Text>
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
                            <Button buttontext="BOOK SERVICE" onPress={toggleModal}/>
                            <Modal isVisible={isModalVisible} style={{backgroundColor: '#ffffff'}}>
                                <ScrollView style={{ flex: 1}}>
                                    <Icon name='close' size={30} style={{ position: 'absolute', top: 0, right: 0,color: '#000000' , padding: 20}} onPress={toggleModal}/>
                                    <Text style={{color: '#000000', textAlign: 'center', fontSize: 24, marginBottom: 20, marginTop: 50}}>Payments</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                                        <CheckBox
                                            tintColors={{true: '#ffc107'}}
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{}}
                                            />
                                        <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>UPI</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                                        <CheckBox
                                            tintColors={{true: '#ffc107'}}
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{}}
                                            />
                                        <Text style={{color: '#000000',fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Credit/Debit/ATM Card</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                                        <CheckBox
                                            tintColors={{true: '#ffc107'}}
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{}}
                                            />
                                        <Text style={{color: '#000000',fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Net Banking</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                                        <CheckBox
                                            tintColors={{true: '#ffc107'}}
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{}}
                                            />
                                        <Text style={{color: '#000000',fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Cash on Dilevery</Text>
                                    </View>

                                    <View style={{alignItems: 'center', marginVertical: 20}}>
                                        <Text style={{color: '#000000', fontSize: 18}}>Total Payable Amount:</Text>
                                        <Text style={{color: 'grey'}}>₹{item.price - item.price * (item.off/100)}</Text>
                                    </View>

                                    <Text style={{color: '#000000', textAlign: 'center', fontSize: 24, marginBottom: 20, marginTop: 50}}>Address</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                                        <CheckBox
                                            tintColors={{true: '#ffc107'}}
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{}}
                                            />
                                        <Text style={{color: '#000000',fontSize: 20, marginLeft: 10}}>#abc, Sector x, U.E., Patna, Bihar</Text>
                                    </View>

                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5, alignSelf:'center'}} onPress={()=>navigation.navigate('AddAddress')}>
                                        <Icon name="add" color='#000000' size={30}/>
                                        <Text style={{color: '#000000',fontSize: 16, marginLeft: 10}}>Add Address</Text>
                                    </TouchableOpacity>
                                    
                                    <View style={{alignSelf: 'center', marginTop: 20}}>
                                        <Button buttontext="CONFIRM BOOKING"/>
                                    </View>
                                </ScrollView>
                        </Modal>
                        </View>
                    </SafeAreaView>
                )}
                keyExtractor={item => item.id}    
            />
    )
}

export default ServiceBookScreen

const styles = StyleSheet.create({})
