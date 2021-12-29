import React, {useContext, useState} from 'react'
import { StyleSheet, Text, TextInput, View, Modal, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { newdata } from '../API/api'
import { useNavigation } from '@react-navigation/native'

const WINDOW_WIDTH = Dimensions.get("window").width
const CARD_WIDTH = Math.round(WINDOW_WIDTH)

const SearchBar = () => {
    const navigation = useNavigation()
    const windowHeight = Dimensions.get("window").height
    const [searchResults, setsearchResults] = useState([])
    const [modalVisible, setmodalVisible] = useState(false)

    const handleSearch = (text) => {
        if(!text)
        {
            setsearchResults([])
            return;
        }
        setsearchResults(newdata.filter((query) => query.title.includes(text)))
    }
    return (
        <View style={{...styles.container, backgroundColor: '#ffc107'}}>
            <Icon name="search" style={{...styles.icon, color: '#000000'}}/>
            <TextInput placeholder="Search for services and packages" placeholderTextColor={'#000000'} style={{...styles.textinput, color: '#000000'}} onChangeText={(text) => handleSearch(text)}/>
            <ScrollView style={{...styles.searchResults, backgroundColor: '#212121', borderWidth: 1, borderColor: '#000000'}}>
                {searchResults.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.card_container} onPress={() => navigation.navigate("Services", {item})}>
                        <Image source={item.imageuri} style={styles.Image} />
                        <Text style={{color: '#ffffff'}}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 5,
        margin: 10,
        paddingHorizontal: 5,
        position: 'relative',
    },
    icon: {
        fontSize: 20,
        padding: 2,
        marginRight: 5
    },
    textinput: {
        fontSize: 15,
    },
    searchResults:{
        position: "absolute",
        zIndex: 100,
        top: 60,
        left: 0,
        // marginHorizontal: 10
    },
    card_container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        height: 100,
        width: CARD_WIDTH,
        borderRadius: 10,
        margin: 5,
      },
    Image: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
      }
})
