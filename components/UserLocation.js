import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons'

const UserLocation = () => {
    const [currentLongitude,setCurrentLongitude] = useState('...');
    const [currentLatitude,setCurrentLatitude] = useState('...');
    const [locationStatus,setLocationStatus] = useState('');

    const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
          //Will give you the current location
          (position) => {
            setLocationStatus('You are Here');
    
            //getting the Longitude from the location json
            const currentLongitude = 
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
            
            //Setting Longitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 1000
          },
        );
      };

      useEffect(() => {
        const requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'Location Access Required',
                  message: 'Webscome needs to Access your location',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                getOneTimeLocation();
                // subscribeLocationLocation();
                // getAddressFromCoordinates(currentLatitude, currentLongitude)
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          // Geolocation.clearWatch(watchID);
        };
      }, []);

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 10}}>
            <Icon name="location-on" size={30} style={{color: '#000000'}}/>
            <View style={{flexDirection: 'row'}}>
                <Text style={{marginHorizontal: 10, color: '#000000'}}>{currentLatitude}</Text>
                <Text style={{color: '#000000'}}>{currentLongitude}</Text>
                {/* <Text style={{color: darkMode?'#f5f5f5':'#212121'}}>{address}</Text> */}
            </View>
        </View>
    )
}

export default UserLocation

const styles = StyleSheet.create({})
