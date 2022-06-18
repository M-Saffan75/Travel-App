import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import foods from './foods'
const CartScreen = ({ navigation }) => {
    const Cartcard = ({ item }) => {
        return (
            <View style={styles.cartCard}>
                <Image source={item.image} style={{ height: 80, width: 80 }} />
                <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex:1 }}>
                    <Text style={{ fontSize:16 ,fontFamily: 'Poppins-SemiBold', color: '#000' }}>{item.name}</Text>
                    <Text style={{ fontSize:13 , letterSpacing:.4  ,color: 'grey' }}>{item.ingredients}</Text>
                    <Text style={{ fontSize:15 , letterSpacing:.4  ,color: '#000' , alignItems:'center', fontFamily:'Poppins-SemiBold' }}>{item.price}</Text>
                </View>

                <View style={{alignItems:'center' , alignItems:'center',}}>
                    <Text style={{fontFamily:'Poppins-SemiBold' , fontSize:16, color: '#000'}}>3</Text>
                    <View style={styles.actionBtn}>
                        <FontAwesome5 name='minus' color={'#fff'} size={15}/>
                        <Text style={{width:10}}></Text>
                        <FontAwesome5 name='plus' color={'#fff'} size={15}/>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.header}>
                <FontAwesome5 name='angle-left' size={24} color={'#000'} onPress={navigation.goBack} />
                <Text style={{ marginLeft: 10, fontSize: 19, letterSpacing: .6, fontWeight: 'bold', color: '#000' }}>Cart</Text>
            </View>
            <FlatList showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }} data={foods} renderItem={({ item }) => <Cartcard item={item} />} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 15
    },
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },

    actionBtn : {
        flexDirection:'row',
        height:30,
        width:80,
        backgroundColor:'#f47e39',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:5
    },  
})

export default CartScreen