import { StyleSheet , Text , View , SafeAreaView , StatusBar , ScrollView , TextInput , FlatList , ImageBackground , TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from './COLORS'
import Places from './Places';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({navigation}) => {

  const Card = ({ places }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailScreen')}>
          <ImageBackground style={style.cardImage} source={places.image}>
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: COLORS.white, marginTop: 8, }}>{places.name}</Text>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', }}>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5 name={'map-marker-alt'} color={COLORS.white} size={18} />
              <Text style={{ color: COLORS.white, marginLeft: 5, }}>{places.location}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5 name={'star'} color={COLORS.white} size={18} />
              <Text style={{ color: COLORS.white, marginLeft: 5, }}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({places}) => {
    return (
      <ImageBackground style={style.rmCardImage} source={places.image}>
        <Text style={{fontSize:21, color:COLORS.white, fontFamily:'Poppins-SemiBold', marginTop:10,}}>{places.name}</Text>
        <View style={{flex:1, justifyContent:'space-between', alignItems:'flex-end',}}>
          <View style={{width:'100%' , flexDirection:'row',}}>
            <View style={{flexDirection:'row',}}>
              <FontAwesome5 name={'map-marker-alt'} size={20} color={COLORS.white}/>
              <Text style={{color:COLORS.white , marginLeft:5,}}>{places.location}</Text>
            </View>
            <View style={{flexDirection:'row',}}>
              <FontAwesome5 name={'star'} size={20} style={{marginLeft:5,}} color={COLORS.white}/>
              <Text style={{color:COLORS.white , marginLeft:5,}}>5.0</Text>
            </View>
          </View>
          <Text style={{color:COLORS.white , fontSize:13, fontFamily:'Poppins-SemiBold'}}>{places.details}</Text>
        </View>
      </ImageBackground>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <FontAwesome5 name={'bars'} style={{ color: COLORS.white }} size={24} />
        <FontAwesome5 name={'bell'} style={{ color: COLORS.white }} size={24} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: COLORS.primary, height: 120, paddingHorizontal: 20, }}>

          <Text style={style.title}>Explore the</Text>
          <Text style={style.title}>Beautiful places</Text>

          <View style={style.inptcontainer}>

            <FontAwesome5 name={'search'} size={24} color={COLORS.dark}/>
            <TextInput placeholder='search places' style={{ color: '#000', color: COLORS.black, paddingHorizontal: 10 , color:COLORS.dark}} />
          </View>
        </View>
        <View style={style.icons}>
          <FontAwesome5 name={'plane'} size={20} style={{ backgroundColor: COLORS.light, borderRadius: 10, backgroundColor: COLORS.secondary, textAlign: 'center', color: COLORS.primary, height: 60, width: 60, justifyContent: 'center', textAlignVertical: 'center' }} />
          <FontAwesome5 name={'umbrella'} size={20} style={{ backgroundColor: COLORS.light, borderRadius: 10, backgroundColor: COLORS.secondary, textAlign: 'center', color: COLORS.primary, height: 60, width: 60, justifyContent: 'center', textAlignVertical: 'center' }} />
          <FontAwesome5 name={'location-arrow'} size={20} style={{ backgroundColor: COLORS.light, borderRadius: 10, backgroundColor: COLORS.secondary, textAlign: 'center', color: COLORS.primary, height: 60, width: 60, justifyContent: 'center', textAlignVertical: 'center' }} />
          <FontAwesome5 name={'map-marker-alt'} size={20} style={{ backgroundColor: COLORS.light, borderRadius: 10, backgroundColor: COLORS.secondary, textAlign: 'center', color: COLORS.primary, height: 60, width: 60, justifyContent: 'center', textAlignVertical: 'center' }} />
        </View>
        
        <View>
          <Text style={style.places}>Places</Text>
          <FlatList style={{ paddingLeft: 20 }} horizontal showsHorizontalScrollIndicator={false}
            data={Places} renderItem={({ item }) => <Card places={item} />} />

          <Text style={style.places}>Recommended</Text>

          <FlatList snapToInterval={width-20} contentContainerStyle={{ paddingLeft: 20, }} horizontal 
            showsHorizontalScrollIndicator={false} data={Places} renderItem={({ item }) => <RecommendedCard places={item} />} />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },

  title: {
    color: COLORS.white,
    fontSize: 23,
    fontFamily: 'Poppins-SemiBold',
  },

  inptcontainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    position: 'relative',
    top: 10,
    elevation: 20,
  },

  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 30,
    marginTop: 60,
    marginBottom: 10,
    textAlign: 'center',
  },

  places: {
    color: COLORS.dark,
    fontFamily: 'Poppins-SemiBold',
    marginHorizontal: 20,
    marginVertical: 15,
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    borderRadius: 10,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
  },

  rmCardImage: {
    width: width-40,
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 22,
    padding: 10,
    marginBottom:90,
    
  },
})
