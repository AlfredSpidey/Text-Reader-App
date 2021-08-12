import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView, 
    ScrollView, 
    StatusBar,
    Dimensions
  } from 'react-native'

  import Tts from 'react-native-tts';
  import { TextInput, Button, Menu, Provider, Modal } from 'react-native-paper';
import Header from '../components/Header';


class Home extends Component {
    state = {
        text: '',
        language: 'pt',
        voice: 'pt-br-x-afs#female_1-local',
        languageMenuVisible: false,
        voiceMenuVisible: false,
        ptVoices: [
            {value: 'pt-br-x-afs#female_1-local', label:'Feminina'},
            {value: 'pt-br-x-afs#male_1-local', label:'Masculina'},
        ],
        enVoices: [
            {value: 'en-US-language', label:'Default'},
        ]
    }
    constructor(props){
        super(props);
        this.onPlay = this.onPlay.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.setVoice = this.setVoice.bind(this);
        Tts.setDefaultVoice(this.state.voice);
    }
    
  
    onPlay = () => {
        Tts.setDefaultVoice(this.state.voice);
        Tts.speak(this.state.text);
    }

    onStop = () => {
        Tts.stop();
    }

    onChangeText(text){
        this.setState({text: text});
    }

    setVoice(voice){
        this.setState({voice: voice});
    }
  
   render() {
        const {...rest} = this.props;
        const { height, width } = Dimensions.get('window');
      return (
          <View>
            {/* <Header {...rest}/> */}
                <SafeAreaView>
                    <ScrollView>
                        <View style={{height:height}}>
                        <Modal onDismiss={()=>{this.setState({languageMenuVisible: false})}} style={{zIndex:10, position:'absolute'}} visible={this.state.languageMenuVisible}>
                            <View style={{backgroundColor:'#fff', margin:'10%', padding:'10%', borderRadius:5}}>
                                <Menu.Item style={this.state.language === 'pt' ? {backgroundColor: '#bebebe', borderRadius: 5} : {backgroundColor: '#0000'}} onPress={() => {this.setState({language: 'pt', voice: 'pt-br-x-afs#female_1-local'})}} title="Portugês" />
                                <Menu.Item style={this.state.language === 'en' ? {backgroundColor: '#bebebe', borderRadius: 5} : {backgroundColor: '#0000'}} onPress={() => {this.setState({language: 'en', voice: 'en-US-language'})}} title="Inglês" />         
                            </View>
                        </Modal>
                        <Modal onDismiss={()=>{this.setState({voiceMenuVisible: false})}} style={{zIndex:10, position:'absolute'}} visible={this.state.voiceMenuVisible}>
                            <View style={{backgroundColor:'#fff', margin:'10%', padding:'10%', borderRadius:5}}>
                                {this.state.language === 'pt' ? this.state.ptVoices.map((voice)=>(<Menu.Item style={this.state.voice === voice.value ? {backgroundColor: '#bebebe', borderRadius: 5} : {backgroundColor: '#0000'}} onPress={() => {this.setVoice(voice.value)}} title={voice.label} />))
                                                            :
                                                            this.state.enVoices.map((voice)=>(<Menu.Item style={this.state.voice === voice.value ? {backgroundColor: '#bebebe', borderRadius: 5} : {backgroundColor: '#0000'}} onPress={() => {this.setVoice(voice.value)}} title={voice.label} />))}
                            </View>
                        </Modal>
                        <View style={{display:'flex', flexDirection:'row', width:'100%', zIndex:-1}}>
                            <Button style={{width:'50%', alignSelf:'flex-start'}} onPress={()=>{this.setState({languageMenuVisible: true, voiceMenuVisible:false})}}>{this.state.language === 'pt' ? 'Língua':'Language'}</Button>
                            <Button style={{width:'50%', alignSelf:'flex-end'}} onPress={()=>{this.setState({voiceMenuVisible: true, languageMenuVisible:false})}}>{this.state.language === 'pt' ? 'Voz':'Voice'}</Button>
                        </View>
                    
                        <View style={styles.container}>
                            <TextInput
                                style={{zIndex:-1}}
                                label={this.state.language === 'pt' ? "Cole seu texto aqui:" : "Paste your text here:"}
                                value={this.state.text}
                                mode={'outlined'}
                                multiline={true}
                                numberOfLines={15}
                                onChangeText={text => this.onChangeText(text)}
                            />
                            
                        <View style={styles.buttonContainer}>
                                <Button icon="play" mode="contained" onPress={this.onPlay}>
                                    Play
                                </Button>
                                <Button icon="stop" mode="contained" onPress={this.onStop}>
                                    Stop
                                </Button>
                            </View>
                        </View>
                        </View>
                </ScrollView>
            </SafeAreaView>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      padding:'5%'
    },
    buttonContainer: {
        zIndex:-1,
        marginTop: '5%',
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
  })
export default Home;