import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Movie} from '../../types/movieType';
import {useDispatch} from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/actions/favoriteActions';
import {useTypedSelector} from '../../redux/store';
import { showMessage } from 'react-native-flash-message';

interface IProps {
  movie: Movie;
}

const FavoriteButton: React.FC<IProps> = ({movie}) => {
  const dispatch = useDispatch();
  const {favorites} = useTypedSelector(state => state.favorite);

  const isFavorite = useMemo(
    () => favorites.some((favMovie: Movie) => favMovie.id === movie.id),
    [favorites],
  );

  const handleClick = () => {

    if(!isFavorite && favorites.length === 10){
      showMessage({
        message: 'Could not add to favorites!',
        description: 'You have reached the favorite addition limit',
        type: 'danger',
        icon: 'danger',
      });
      return
    }
    if (!isFavorite) {
      dispatch(addToFavorites(movie));
      return;
    }
    dispatch(removeFromFavorites(movie.id));
  };

  return (
    <TouchableOpacity onPress={handleClick} activeOpacity={0.9}>
      <View style={style.container}>
        <AntDesign name="heart" size={20} color={isFavorite ? 'red' : 'gray'} />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
});

export default FavoriteButton;
