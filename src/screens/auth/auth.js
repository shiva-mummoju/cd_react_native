import React , { Component } from 'react';
import { View , Text, Button } from 'react-native';

import startHomePageTabs from './../home/startHomePageTabs'

class AuthScreen extends Component {
    
    onLoginButtonPressed = () => {
            // going to the tabs based screen. 
            // alert("hi fro ÷the auth sfrren");
            startHomePageTabs();
    }
    
    render() {

        

        return (
            <View>
                <Text>This is the auth screen</Text>
                <Button title="Login" onPress={this.onLoginButtonPressed}></Button>
            </View>
        );
    }
}

export default AuthScreen;
