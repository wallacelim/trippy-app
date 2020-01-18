import { Button, StyleSheet, Text, View } from 'react-native';
import React, { Component} from 'react';
import NavigationService from '../NavigationService';

export default class Signup_Prompt extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Button style={styles.button}
                    title="signup"
                    onPress={() => NavigationService.navigate('Signup')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        width: 65,
        height: 20,
        marginHorizontal: 20,
        top: -200,
        left: 180,
        paddingLeft: 45,
        borderRadius: 20,
    }, button: {
        alignItems: "center",
        backgroundColor: 'pink',
        width: 30,
        zIndex: 110
    }   
})