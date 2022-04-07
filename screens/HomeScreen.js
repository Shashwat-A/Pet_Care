import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native-web';
import Header from '../components/Header';

let font = {
    "MyFont": require('../assets/PlayfairDisplay-VariableFont_wght.ttf')
}

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync(font);
        this.setState({ fontsLoaded: true });
      }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        
        return(
            <View style={{flex: 1, backgroundColor: '#c3f7e6'}}>
                <Header/>
                <Text>I have to addddd infoooo</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        flex: 0.33,
        width: '80%',
        margin: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#E3E3E3",
        borderRadius: 25,
        borderWidth: 3,
        flexDirection: 'row'
    },

    btnText: {
        fontFamily: 'MyFont',
        fontWeight: 'bold',
        fontSize: 24,
        textAlignVertical: 'bottom',


    },
    
    btnHolder:{
        width: '100%',
        flex: 0.9,
        backgroundColor: '#c3f7e6',
        alignContent: 'center',
        justifyContent: 'center'
    },

    btnImage : {
        width: 70,
        height: 70,
        borderRadius: 10,
        
    }
})