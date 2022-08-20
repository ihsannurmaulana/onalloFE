import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListProduct from '../ItemListProduct';
import {
  ProductDummy1,
  ProductDummy2,
  ProductDummy3,
  ProductDummy4,
} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: 0.15,
      marginLeft: 0.03,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewProduct = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy1}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy2}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy3}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy4}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy1}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy2}
          onPress={() => navigation.navigate('ProductDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy4}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy3}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy2}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy1}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy1}
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemListProduct
          type="product"
          name="T-Shirt"
          price="200.000"
          rating={3}
          image={ProductDummy2}
          onPress={() => navigation.navigate('ProductDetail')}
        />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: NewProduct,
  2: Popular,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Product'},
    {key: '2', title: 'Popular'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
