import React from 'react';
import {View, Text, Pressable, StyleSheet, FlatList, Image} from 'react-native';
import Http from '../../libs/http';

class CoinsScreen extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount = async () => {
    const res = await Http.instance.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=19fdfa04ac548b85e48bb87a45900d1d&language=en-US&page=1',
    );
    this.setState({movies: res.results});
  };
  handlePress = () => {
    console.log('Pressed');
    this.props.navigation.navigate('CoinDetail');
  };

  render() {
    const {movies} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={({item}) => (
            <Pressable onPress={this.handlePress}>
              <View style={styles.item}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.vote_average}</Text>
              </View>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    width: 150,
  },
  description: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10,
  },
  price: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10,
    display: 'flex',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CoinsScreen;
