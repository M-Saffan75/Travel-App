import { StyleSheet, Text, View, Image , TouchableOpacity  ,ScrollView} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-native-safe-area-context'

const Information = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <ScrollView>
            <View style={styles.header}>
                <FontAwesome5 name='angle-left' style={{ marginLeft: 15 }} size={24} color={'#000'} onPress={navigation.goBack} />
                <Text style={{
                    fontSize: 17, fontWeight: 'bold',
                    letterSpacing: .7, marginLeft: 8,
                    color: '#000'
                }}>Details</Text>
            </View>
            <View style={{
                justifyContent: 'center', alignItems: 'center',
                height: 280
            }}>
                <Image source={require('./images/meatPizza.png')}
                    style={{ height: 220, width: 220 }}
                />
            </View>
            <View style={styles.details}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <Text style={styles.name}>Meat Pizza</Text>
                    <View style={styles.heart}>
                        <FontAwesome5 name='heart' size={26} color={'#f47e39'} />
                    </View>
                </View>
                <Text style={styles.detailtext}>
                    Serving NewYork style Pizza's with Stuffed Cheese Crust, and 
                    Variety of Fully loaded Calzones, along with Awesome Sidelines
                    such as Caveman fries, Chicken Wings and cheesy Tikka bread 
                    The perfect pizza crust topped with homemade pizza sauce, gooey 
                    cheese and tons of sausage, pepperoni and crumbled bacon
                </Text>
                <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('CartScreen')}>
                    <View style={styles.btn}>
                        <Text style={styles.btn2}>Add To Cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Information

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    details: {
        paddingVertical: 20,
        backgroundColor: '#f47e39',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    name: {
        color: '#fff',
        marginLeft: 20,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
    },
    heart: {
        height: 60,
        width: 60,
        marginRight: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    detailtext : {
        fontFamily:'Poppins-SemiBold',
        color:'#fff',
        padding:20,
        lineHeight:23,  
    },
    btn : {
        color:'#fff',
        backgroundColor:'#fff',
        marginVertical:50,
        borderRadius:30,
        height:60,
        paddingVertical:10,
        marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',  
    },   
    
    btn2 : {
        color:'#f47e39',
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        letterSpacing:.5,
    },
})