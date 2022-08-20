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
import ItemListProfile from '../ItemListProfile';

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

const Account = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListProfile text="Edit Profile" />
        <ItemListProfile text="Home Address" />
        <ItemListProfile text="Security" />
        <ItemListProfile text="Payments" />
      </View>
    </ScrollView>
  );
};

const OnalloStore = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListProfile text="Rate App" />
        <ItemListProfile text="Help Center" />
        <ItemListProfile text="Privacy & Policy" />
        <ItemListProfile text="Terms & Conditions" />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: OnalloStore,
});

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'OnalloStore'},
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

export default ProfileTabSection;

const styles = StyleSheet.create({});
