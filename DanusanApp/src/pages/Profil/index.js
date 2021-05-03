import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import {ImageHeader } from '../../assets'

const Profil = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ImageHeader} style={styles.header}></ImageBackground>
            <View style={styles.body}>
                <Text>
                    Profil
                </Text>
            </View>
        </View>
    )
}

export default Profil


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#138BFE',
        flex: 1,
        alignItems: 'center' 
    },
    header:{
        width:161,
        height: 40,
        marginTop: 15,
        marginBottom: 15
    },
    body:{
        width: windowWidth,
        height: windowHeight,
        borderRadius: 20,
        borderColor: '#138BFE',
        borderWidth: 1,
        backgroundColor: 'white'
    }
})