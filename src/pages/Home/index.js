import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  ProductDummy1,
  ProductDummy2,
  ProductDummy3,
  ProductDummy4,
} from '../../assets';
import {Gap, HomeProfile, HomeTabSection, ProductCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Layout} from 'react-native-reanimated';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{height: Layout.height}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.productContainer}>
              <Gap width={24} />
              <ProductCard
                image={ProductDummy1}
                onPress={() => navigation.navigate('ProductDetail')}
              />
              <ProductCard
                image={ProductDummy2}
                onPress={() => navigation.navigate('ProductDetail')}
              />
              <ProductCard
                image={ProductDummy3}
                onPress={() => navigation.navigate('ProductDetail')}
              />
              <ProductCard
                image={ProductDummy4}
                onPress={() => navigation.navigate('ProductDetail')}
              />
              <ProductCard
                image={ProductDummy2}
                onPress={() => navigation.navigate('ProductDetail')}
              />
              <ProductCard
                image={ProductDummy3}
                onPress={() => navigation.navigate('ProductDetail')}
              />
              <ProductCard
                image={ProductDummy1}
                onPress={() => navigation.navigate('ProductDetail')}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  productContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
