import React, { Component } from 'react';
import { Text,StyleSheet,View } from 'react-native';
class CardItem extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.card}>
                {this.props.children}
            </View>
         );
    }
}
const styles = StyleSheet.create({
    card :{
        padding : 5 ,
        borderColor : 'red' , 
        borderBottomWidth : 0 ,
        backgroundColor : '#fff',
        justifyContent : 'flex-start',
        flexDirection :'row'
    }
});
export default CardItem;