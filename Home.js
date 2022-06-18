import { Dimensions, StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from './Categories'
import foods from './foods'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width } = Dimensions.get('screen')
const cardWidth = width / 2 - 20;

const Home = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesListContainer}>
        {Categories.map((category, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View style={{
              backgroundColor: selectedCategoryIndex == index ? '#f47e39' : '#fbdbc4',
              ...styles.categoryBtn
            }}>
              <View style={styles.categoryBtnImgCon}>
                <Image source={category.image} style={{ height: 35, width: 35, resizeMode: 'cover', borderRadius: 30 }} />
              </View>
              <Text style={{
                fontFamily: 'Poppins-SemiBold', marginLeft: 9,
                color: selectedCategoryIndex == index ? '#fff' : 'orange',
              }} >{category.name}</Text>
            </View>
          </TouchableOpacity>))}
      </ScrollView>
    );
  }

  const Card = ({ food }) => {
    return (
      <TouchableOpacity UnderlayColor='#fff' activeOpacity={0.8} onPress={() => navigation.navigate('Information')}>
        <View style={styles.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image source={food.image} style={{ height: 120, width: 120, }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#000' }}>{food.name}</Text>
            <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'grey', fontSize: 12, marginTop: 2, }}>{food.name}</Text>
          </View>
          <View style={{ marginHorizontal: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#000', fontFamily: 'Poppins-SemiBold', fontSize: 18 }}>{food.price}</Text>
            <View style={styles.addToCartBtn}>
              <FontAwesome5 name='plus' size={15} color={'#fff'} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 25, color: '#000', fontFamily: 'Poppins', marginLeft: 10, }}>Hello, </Text>
            <Text style={{ fontSize: 25, color: '#000', fontFamily: 'Poppins-SemiBold', paddingBottom: 0, }}>Sir</Text>
          </View>
          <Text style={{ marginLeft: 10, fontFamily: 'Poppins', color: 'grey', fontSize: 22, }}>what do you want today</Text>
        </View>
        <Image source={require('./images/perfect.jpg')} style={styles.img} />
      </View>
      <View style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={styles.inputContainer}>
          <FontAwesome5 name='search' size={16} style={{ marginLeft: 10 }} color={'#000'} />
          <TextInput placeholder='search for food' style={{ flex: 1, color: 'black', marginLeft: 5 }} />
        </View>
        <View style={styles.sorBtn}><FontAwesome5 name='sort-amount-up-alt' size={26} color={'white'} /></View>
      </View>
      <View><ListCategories /></View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
      {/* foods.length /  */}
    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  img: {
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#ececec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sorBtn: {
    height: 50,
    width: 50,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f47e39',
  },

  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,

  },

  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: '#fff',
  },

  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#f47e39',
    justifyContent: 'center',
    alignItems: 'center',
  },
})