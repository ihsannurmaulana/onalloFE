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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListProduct
          rating={3}
          image={ProductDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items="3"
          price="3.000.000"
          name="T-Shirt"
        />
        <ItemListProduct
          rating={3}
          image={ProductDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items="3"
          price="3.000.000"
          name="T-Shirt"
        />
        <ItemListProduct
          rating={3}
          image={ProductDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items="3"
          price="3.000.000"
          name="T-Shirt"
        />
        <ItemListProduct
          rating={3}
          image={ProductDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items="3"
          price="3.000.000"
          name="T-Shirt"
        />
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListProduct
          rating={3}
          image={ProductDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items="3"
          price="3.000.000"
          name="T-Shirt"
          date="Jun 12, 14:00"
        />
        <ItemListProduct
          rating={3}
          image={ProductDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items="3"
          price="3.000.000"
          name="T-Shirt"
          date="Mei 2, 09:00"
          status="Cancelled"
        />
        <ItemListProduct
          rating={3}
          image={ProductDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items="3"
          price="3.000.000"
          name="T-Shirt"
          date="June 3, 13.00"
          status="Cancelled"
        />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
