import React from 'react';
import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native';

import Colors from '../../res/colors';

const CoinsItem = ({item, onPress}) => {
  const getImageArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('../../assets/arrow_up.png');
    } else {
      return require('../../assets/arrow_down.png');
    }
  };
  return (
    <Pressable onPress={onPress} style={styles.constainer}>
      <View style={styles.row}>
        <Text style={styles.coinSymbol}>{item.symbol}</Text>
        <Text style={styles.coinName}>{item.name}</Text>
        <Text style={styles.coinPrice}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.coinPercentage}>{item.percent_change_1h}</Text>
        <Image
          style={styles.coinArrow}
          source={getImageArrow()}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
    paddingLeft: Platform.OS === 'ios' ? 0 : 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinName: {
    color: '#fff',
    fontSize: 14,
  },
  coinPrice: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
  coinSymbol: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
  coinPercentage: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 8,
  },
  coinArrow: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});
export default CoinsItem;
