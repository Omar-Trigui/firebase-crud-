import React, { Component } from 'react';

import {Text ,TouchableOpacity, StyleSheet} from 'react-native';

 const Button = (props) => {
    return(
        <TouchableOpacity style = { styles.button} onPress={props.onPress}>
            <Text style = { styles.text}> {props.children}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button : {
    
        
        height : 45 ,
        borderRadius : 5,
        marginHorizontal:25,
        marginVertical : 10,
        backgroundColor : 'rgb(42,55,68)',
        justifyContent : 'center' ,
    
    },
    text : {
        alignSelf : 'center' , 
        color : 'white' , 
        fontSize : 16 , 
        fontWeight : '600' , 
        paddingTop : 10 , 
        paddingBottom : 10 
    }
});
export default Button ;