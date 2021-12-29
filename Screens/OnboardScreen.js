import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,Button,} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

const OnboardScreen = () => {
    const navigation = useNavigation()
    const onDone = () => {
      navigation.navigate("OTPlogin")
    };
    const onSkip = () => {
      navigation.navigate("OTPlogin")
    };
    const RenderItem = ({item}) => {
        return (
              <View style={{flex: 1, backgroundColor: item.backgroundColor,alignItems: 'center',justifyContent: 'center'}}>
                <Image style={styles.introImageStyle} source={item.image} />
                {/* <View style={{padding: 5, alignItems: 'center'}}>
                  <Text style={{color: '#ffffff', fontSize: 25, fontWeight: '900', alignSelf: 'center', textAlign: 'center'}}>{item.title}</Text>
                  <Text style={{color: '#e0e0e0', fontSize: 16, fontWeight: '400', alignSelf: 'center', marginTop: 10, textAlign: 'center'}}>{item.text}</Text>
                </View> */}
              </View>
        );
      };
    
    
      const RenderSkipButton = () => {
        return (
            <View style={{paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#ffc107'}}>
              <Text style={{color: '#000000', fontSize: 18}}>Skip</Text>
            </View>
        );
      };
    
      const RenderNextButton = () => {
        return (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#ffc107'}}>
                <Text style={{color: '#000000', fontSize: 18}}>Next</Text>
                <Icon name="arrow-right-alt" style={{color: '#000000', fontSize: 18}}/>
              </View>
        );
      };
    
      const RenderDoneButton = () => {
        return (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#ffc107'}}>
                <Text style={{color: '#000000', fontSize: 18}}>Done</Text>
                <Icon name="done" style={{color: '#000000', fontSize: 18}}/>
              </View>
        );
      };
    return (
        <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
                renderNextButton={RenderNextButton}
                renderSkipButton={RenderSkipButton}
                renderDoneButton={RenderDoneButton}
                dotStyle={{backgroundColor: 'lightgrey'}}
                activeDotStyle={{backgroundColor: '#ffffff'}}
              />
    )
}

export default OnboardScreen

const styles = StyleSheet.create({
    introImageStyle: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
      },
      introTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 30,
      }
})

const slides = [
    {
      key: 's1',
      text: 'Manpower solutions for Automobile Industry, Food Industry, Plastic Industry, Educational Institutions, Energy Sector, Bottling plants and Industrial housekeeping etc.',
      title: 'Man power supply in India & Abroad',
      image: require('../assets/logomain.png'),
      backgroundColor: '#ffffff',
    },
]
