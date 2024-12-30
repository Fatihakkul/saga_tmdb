import React, {useMemo} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useTypedSelector} from '../../redux/store';
import {Container, Header, MoviesItem} from '../../components';
import {createGetItemLayout} from '../../constants/helpers';
import {verticalScale} from 'react-native-size-matters';

const FavoriteScreen = () => {
  const {favorites} = useTypedSelector(state => state.favorite);
  const initialNumToRender = Math.ceil(favorites.length / 2);

  const renderMovieItem = ({item}: {item: any}) => {
    return <MoviesItem movie={item} />;
  };

  const getItemLayout = useMemo(
    () => createGetItemLayout(verticalScale(200), 0),
    [],
  );

  return (
    <Container>
      <Header title="Favorites" />
      <View style={styles.container}>
        <FlatList
          data={favorites}
          style={{width: '100%', alignSelf: 'center', maxWidth: 650}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={renderMovieItem}
          numColumns={2}
          keyExtractor={item => item?.id?.toString()}
          getItemLayout={getItemLayout}
          initialNumToRender={initialNumToRender}
          maxToRenderPerBatch={10}
          windowSize={5}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
  movieCard: {
    marginBottom: 20,
    alignItems: 'center',
  },
  moviePoster: {
    width: 150,
    height: 225,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FavoriteScreen;
