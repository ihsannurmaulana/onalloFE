import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IcBackWhite, ProductDummy1} from '../../assets';
import {Button, Counter, Gap, Rating} from '../../components';

const ProductDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ProductDummy1} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('MainApp')}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>T-Shirt</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Gap height={14} />
          <Text style={styles.desc}>
            Kaos dengan bahan yang adem dan warna yang keren tentu sangat
            cocokmenemani anda untuk jalan.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Nyaman, Lembut dan bagus</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.titlePrice}>Total Price:</Text>
            <Text style={styles.totalPrice}>IDR 12.289.000</Text>
          </View>
          <View style={styles.button}>
            <Button
              text="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#A9ADBA',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  priceContainer: {flex: 1},
  titlePrice: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  totalPrice: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
  button: {width: 163},
});
