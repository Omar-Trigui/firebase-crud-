import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style ={styles.card}>
                {this.props.children}
            </View>
         );
    }
}
const styles = StyleSheet.create({
    card : {
        marginLeft : 5 ,
        marginRight : 5 , 
        marginTop : 10 , 
        borderWidth : 1 , 
        borderRadius : 2 , 
        borderColor : '#ddd' , 
        borderBottomWidth : 0 , 
        shadowColor : '#000',
        shadowOpacity : 0.1
    }
});

 
export default Card;