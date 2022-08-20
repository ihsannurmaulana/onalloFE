import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcNext} from '../../../assets';

const ItemListProfile = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <IcNext />
    </View>
  );
};

export default ItemListProfile;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  text: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
});
