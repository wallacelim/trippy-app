import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class Signup_Prompt extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.normal}>No account yet?
                <Text onPress={()=> {}} style={styles.signup}> Sign up 
                <Text style={styles.normal}> instead!
                </Text></Text></Text>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: 15,
        flex: 0.1,
        top: -185,
        alignItems: 'center',
        justifyContent: 'flex-start', //top of the white box
        zIndex: 98
    },
    normal: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'white',
        height: 16,
        zIndex: 98
    },
    signup: {
        fontWeight: 'bold',
        fontSize: 14,
        height: 16,
        zIndex: 98
    },
  });