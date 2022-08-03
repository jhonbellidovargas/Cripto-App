import React from 'react';
import {
  View,
  ActivityIndicator,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import Http from '../../libs/http';
import CoinsItem from './CoinsItem';
import CoinsSearch from './CoinsSearch';
import Colors from '../../res/colors';

class CoinsScreen extends React.Component {
  state = {
    coins: [],
    allCoins: [],
    loading: false,
  };

  componentDidMount = () => {
    this.getCoins();
  };

  getCoins = async () => {
    this.setState({loading: true});
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    this.setState({coins: res.data, loading: false, allCoins: res.data});
  };

  onPress = coin => {
    this.props.navigation.navigate('CoinDetail', {coin});
  };

  handleSearch = query => {
    const {allCoins} = this.state;
    this.setState({loading: true});
    const coinsFil = allCoins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });
    this.setState({coins: coinsFil, loading: false});
  };

  render() {
    const {coins, loading} = this.state;
    return (
      <View style={styles.container}>
        <CoinsSearch onChange={this.handleSearch} />
        {loading ? (
          <ActivityIndicator style={styles.loader} size="large" color="#fff" />
        ) : (
          <FlatList
            data={coins}
            renderItem={({item}) => (
              <CoinsItem item={item} onPress={() => this.onPress(item)} />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
});

export default CoinsScreen;
