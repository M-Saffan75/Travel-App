import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from './COLORS'

const DetailScreen = ({navigation}) => {

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
                
                <ImageBackground style={style.img} source={require('./images/location1.jpg')}>
                    <View style={style.header}>
                        <FontAwesome5 name={'angle-left'} size={25} color={COLORS.white} onPress={() => navigation.goBack()} />
                        <FontAwesome5 name={'ellipsis-v'} size={25} color={COLORS.white} />
                    </View>

                    <View style={style.imageDetails}>
                        <Text style={{ width: '70%', color: COLORS.white, fontSize: 30, fontFamily: 'Poppins-SemiBold' }}>Lago Di Braies, Braies</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5 name={'star'} size={20} color={COLORS.orange} />
                            <Text style={{ color: COLORS.white, fontSize: 20, marginLeft: 5, fontFamily: 'Poppins-SemiBold' }}>5.0</Text>
                        </View>
                    </View>

                </ImageBackground>

                <View style={style.detailsContainer}>
                    <View style={style.iconcontainer}><FontAwesome5 name={'heart'} size={30} color={COLORS.red} /></View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <FontAwesome5 name={'map-marker-alt'} size={22} color={COLORS.primary} />
                        <Text style={{ color: COLORS.primary, fontSize: 20, marginLeft: 5, fontFamily: 'Poppins-SemiBold' }}>Italy</Text>
                    </View>
                    <Text style={{ color: COLORS.dark, paddingVertical: 20, fontFamily: 'Poppins-SemiBold', fontSize: 20, }}>About the help</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'Poppins-SemiBold', color: COLORS.dark, lineHeight: 22 }}>
                        Italy Tours by Bus, Coach Rental, Transfert to Airport and Hotels, Excursions.
                        Puglia Tour by Bus. Rent Bus in Milan. Incoming Tours. Coach Hire in Rome. Tuscany Wine Tour.
                        Milan Tour by Bus. Venezia and Verona by Bus. Ascoli Piceno Tour by Bus. Rome Tour by Bus.
                    </Text>
                </View>
                <View style={style.footer}>
                    <View style={{flex:1, flexDirection: 'row' , alignItems:'center' }}>
                        <Text style={{ fontSize: 18, color: COLORS.white ,fontFamily:'Poppins-SemiBold'}}>100$</Text>
                        <Text style={{ fontSize: 12, color: COLORS.grey ,fontFamily:'Poppins-SemiBold' , marginLeft:2}}>/PERDAY</Text>
                    </View>
                    <View style={style.booknowbtn}>
                        <Text style={{color:COLORS.primary,fontFamily:'Poppins-SemiBold'}}>Book Now</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default DetailScreen

const style = StyleSheet.create({
    iconcontainer: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: -30,
        borderRadius: 30,
        right: 20,
        elevation: 10,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',

    },

    detailsContainer: {
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 40,
    },

    img: {
        paddingVertical: 30,

    },
    header: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    imageDetails: {
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 150,
    },

    footer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: 71,
        justifyContent: 'space-between',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    booknowbtn : {
        height:50,
        width:150,
        backgroundColor:COLORS.white,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',

    },
})