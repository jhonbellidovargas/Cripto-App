import React from 'react';
import {TextInput, Platform, View, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

class CoinsSearch extends React.Component {
  state = {
    query: '',
  };

  handleText = query => {
    this.setState({query});
    if (this.props.onChange) {
      this.props.onChange(query);
      console.log('searching', query);
    }
  };

  render() {
    const {query} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={[
            styles.input,
            Platform.OS === 'android' ? styles.inputAndroid : styles.inputIos,
          ]}
          onChangeText={this.handleText}
          value={query}
          placeholder="Search Coin"
          placeholderTextColor="#999"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 46,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: '#fff',
  },
  inputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  inputIos: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinsSearch;
