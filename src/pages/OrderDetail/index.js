import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Button,
  Gap,
  Header,
  ItemListProduct,
  ItemValue,
} from '../../components';
import {ProductDummy1} from '../../assets';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        title="Payment"
        SubTitle="You deserve better style"
        onBack={() => navigation.navigate('Order')}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListProduct
          type="order-summary"
          name="T-Shirt"
          price="280.000"
          items={13}
          image={ProductDummy1}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="T-Shirt" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue
          label="Total Price"
          value="IDR 390.803.000"
          valueColor="#1ABC9C"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Ihsan" />
        <ItemValue label="Phone No." value="0822 0819 9688" />
        <ItemValue label="Address" value="Sukmajaya" />
        <ItemValue label="House No." value="C3 " />
        <ItemValue label="City" value="Depok" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>

        <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
      </View>
      <View style={styles.button}>
        <Button
          text="Cancel My Order"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
          color="#D9435E"
          textColor="white"
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {marginHorizontal: 24, marginTop: 24},
});
