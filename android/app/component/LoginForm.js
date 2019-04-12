import React, { Component } from 'react';
import {Text,StyleSheet,View} from 'react-native';
import Button from './Button';
import Card from './CardItem';
import CardItem from './CardItem';

class LoginForm extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
                <CardItem>
                    <Button>Login</Button>
                </CardItem>
            </Card>
         );
    }
}


export default LoginForm;