import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const slides = [
  {
    id: '1',
    image: require('./images/onboard2.png'),
    title: 'Delicious Food',
    subtitle: 'we help you to find best and delicious food.',
    subtitle2: 'as you axpect.',
  },
  {
    id: '2',
    image: require('./images/sushi.png'),
    title: 'Sushi Makizushi',
    subtitle: 'we help you to find best and delicious food.',
    subtitle2: 'as you axpect.',
  },
  {
    id: '3',
    image: require('./images/cheesePizza.png'),
    title: 'Cheeze Pizza',
    subtitle: 'we help you to find best and delicious food.',
    subtitle2: 'as you axpect.',
  },
]

const Slide = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={{ height: '55%', width, resizeMode: 'contain', marginVertical: 40, }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.subtitle2}>{item.subtitle2}</Text>
    </View>
  )
}

const NewSlide = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const Footer = () => {
    return (

      <View style={{ height: height * 0.17, justifyContent: 'space-between', paddingHorizontal: 20, }}>
        
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>{slides.map((_, index) => (
          <Text key={index} style={[styles.indicator, currentSlideIndex == index && { backgroundColor: '#f47e39', width: 25, },]} />))}
        </View>
         
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70, }}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.navigate('Home')}>
            <Text style={{ color: '#fff', fontFamily: 'Poppins-SemiBold' }}>Get Started </Text><FontAwesome5 name='angle-right' style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
    const updateCurrentSlideIndex = e => {
      const contentOffsetX = e.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffsetX / width);
      setCurrentSlideIndex(currentIndex);
  };

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'transparent'} />
      <FlatList ref={ref}  onMomentumScrollEnd={updateCurrentSlideIndex} showsHorizontalScrollIndicator={false} pagingEnabled horizontal contentContainerStyle={{ height: height * 0.80 }} data={slides} renderItem={({ item }) => <Slide item={item} />} />
      <Footer />
    </SafeAreaView>
  )
}

export default NewSlide

const styles = StyleSheet.create({
  title: {
    color: '#000',
    letterSpacing: 1,
    fontSize: 30,
    marginTop: 0,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold'
  },

  subtitle: {
    color: 'grey',
    lineHeight: 23,
    letterSpacing: .6,
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: 'Poppins-SemiBold',
  },

  subtitle2: {
    color: 'grey',
    lineHeight: 23,
    letterSpacing: .6,
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Poppins-SemiBold',
  },

  btn: {
    color: '#fff',
    backgroundColor: '#f47e39',
    height: 60,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    borderRadius: 30,
  },
  
  indicator: {
    height: 4,
    width: 15,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 50,
},

  icon: {
    color: '#fff',
    fontSize: 18,
    position: 'relative',
    top: -1,
    left: 3,
  },
})