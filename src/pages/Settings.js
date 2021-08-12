import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView, 
    ScrollView, 
    StatusBar
  } from 'react-native'

  import Tts from 'react-native-tts';
  import { List } from 'react-native-paper';
import Header from '../components/Header';


class Settings extends Component {
    state = {
    }
    constructor(props){
        super(props);
    }
  
   render() {
        return (
            <View>
              
            </View>
        )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      padding:'5%'
    },
    buttonContainer: {
        marginTop: '5%',
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
  })
export default Settings;