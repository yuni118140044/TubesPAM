import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import { ImageHeader, IkonSearchbar } from '../../assets'

const Cari = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ImageHeader} style={styles.header}></ImageBackground>
            <View style={styles.body}>
                <View style={{position:'relative'}}>
                    <TextInput placeholder="Cari danusan..." style={styles.textinput}/>
                    <Image source={IkonSearchbar} style={styles.search}/>
                </View>
                <View></View>
            </View>
        </View>
    )
}

export default Cari

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
        width: windowWidth+2,
        height: windowHeight,
        borderRadius: 20,
        borderColor: '#138BFE',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    textinput:{
        backgroundColor: '#e6e6e6',
        borderRadius: 20,
        height: 30,
        fontSize: 14,
        color: '#848484',
        paddingLeft: 35,
        paddingRight: 20,
        margin: 20,
        paddingTop: 10,
        paddingBottom: 6
    },
    search:{
        position: 'absolute',
        left: 25,
        top: 25
    }
})


