import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/Button'
import {useNavigation} from '@react-navigation/native'


const AddAddressScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{...styles.container, backgroundColor: '#ffffff'}}>
            <View style={{alignItems: 'center'}}>

                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold', color: '#000000'}}>
                    Add Address
                </Text>
            </View>

            <View style={styles.action}>
                <Icon name="directions" color={'#000000'} size={30} />
                <TextInput
                    placeholder="Address Line 1"
                    placeholderTextColor="grey"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        fontSize: 16,
                        color: '#000000'
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
                <Icon name="edit-location" color={'#000000'} size={30} />
                <TextInput
                    placeholder="City"
                    placeholderTextColor="grey"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        fontSize: 16,
                        color: '#000000'
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
                <Icon name="explore" color={'#000000'} size={30} />
                <TextInput
                    placeholder="Country"
                    placeholderTextColor="grey"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        fontSize: 16,
                        color: '#000000'
                    },
                    ]}
                />
            </View>
            
            <Button buttontext="Save" onPress={()=>navigation.navigate('BottomTab')}/>
        </View>
    )
}

export default AddAddressScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      action: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        padding: 5,
      },
      actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
      },
})
