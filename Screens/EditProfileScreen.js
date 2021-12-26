import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/Button'

const EditProfileScreen = () => {
    const[image, setimage] = useState('https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg')
    return (
        <View style={{...styles.container, backgroundColor: '#000000'}}>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity>
                    <View style={{height: 100,width: 100,borderRadius: 15,justifyContent: 'center',alignItems: 'center'}}>
                        <ImageBackground source={{uri: image}} style={{height: 100, width: 100}} imageStyle={{borderRadius: 15}}>
                            <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                                <Icon
                                    name="camera-alt"
                                    size={35}
                                    color="#ffffff"
                                    style={{
                                    opacity: 0.7,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    borderRadius: 10,
                                    }}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>
                    Rahul Sharma
                </Text>
            </View>

            <View style={styles.action}>
                <Icon name="person" color={'#ffffff'} size={30} />
                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="lightgrey"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        fontSize: 16,
                        color: '#ffffff'
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
                <Icon name="person" color={'#ffffff'} size={30} />
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="lightgrey"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        fontSize: 16,
                        color: '#ffffff'
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
                <Icon name="local-phone" color={'#ffffff'} size={30} />
                <TextInput
                    placeholder="Phone"
                    placeholderTextColor="lightgrey"
                    keyboardType="number-pad"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        fontSize: 16,
                        color: '#ffffff'
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
                <Icon name="email" color={'#ffffff'} size={30} />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="lightgrey"
                    keyboardType="email-address"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        fontSize: 16,
                        color: '#ffffff'
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
                <Icon name="edit-location" color={'#ffffff'} size={30} />
                <TextInput
                    placeholder="City"
                    placeholderTextColor="lightgrey"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        fontSize: 16,
                        color: '#ffffff'
                    },
                    ]}
                />
            </View>
            
            <Button buttontext="Update Profile"/>
        </View>
    )
}

export default EditProfileScreen

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
        borderColor: '#f2f2f2',
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
