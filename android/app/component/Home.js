import React, { Component } from 'react';
import {Text,StyleSheet,View} from 'react-native';

import Button from './Button';

class Home extends Component {
    state = {  }
    constructor(){
        super();
        this.state = {
            title : 'title from the state'
        }
    }
    onLoginPress(){
        this.props.navigation.navigate('Login');
        
    }
    render() { 
        return (
            <View>
              <Button
              onPress={this.onLoginPress.bind(this)}>
              Login</Button>
            </View> 
         );
    }
}
 
export default Home;