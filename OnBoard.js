import {TouchableOpacity, StyleSheet, Text, View ,ImageBackground , StatusBar} from 'react-native'
import React from 'react'
import COLORS from './COLORS'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const OnBoard = ({navigation}) => {
  
  return (
    <View style={styles.conatiner}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
      <ImageBackground style={styles.image} source={require('./images/onboardImage.jpg')}>
        <View style={styles.datails}>
            <Text style={{color: Colors.white , fontSize:35, fontFamily:'Poppins-Bold'}}>Discover</Text>
            <Text style={{color: Colors.white , fontSize:35, fontFamily:'Poppins-Bold' , textAlign:'left',}}>world with us</Text>
            <Text style={{color: COLORS.white , lineHeight:28, marginTop:15, fontFamily:'Poppins'}}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} activeOpacity={0.8}>
                <View style={styles.btn}>
                    <Text style={{fontFamily:'Poppins-Bold' , color:COLORS.dark}} >Get Started</Text>
                </View>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default OnBoard

const styles = StyleSheet.create({

    image :{ 
       height:'100%', 
       width:'100%',
    },

    datails:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:30,
        marginTop:30,
    },

    btn : {
        backgroundColor:COLORS.white,
        color:COLORS.black,
        height:50,
        width:120,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:30,
    },
})