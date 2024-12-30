import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Movie} from '../../types/movieType';
import FavoriteButton from '../buttons/FavoriteButtons';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import MovieInfoCard from './MovieInfoCard';
import {verticalScale} from 'react-native-size-matters';

interface IProps {
  movie: Movie;
}

const MoviesItem: React.FC<IProps> = ({movie}) => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[style.button]}
      onPress={() => navigation.navigate('Detail', {movieId: movie.id})}
      delayPressIn={50}>
      <ImageBackground
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        resizeMethod="resize"
        style={style.imageWrapper}
        imageStyle={style.image}
        resizeMode="stretch">
        <View style={{paddingTop: 15, paddingRight: 10}}>
          <FavoriteButton movie={movie} />
        </View>
        <MovieInfoCard movie={movie} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  imageWrapper: {
    width: Dimensions.get('window').width * 0.45 - 2,
    height: verticalScale(200),
    marginBottom: 14,
    alignItems: 'flex-end',
    borderRadius: 10,
    maxWidth: 300,
  },
  image: {
    borderRadius: 10,
    height: verticalScale(200),
    marginTop: 5,
    width: Dimensions.get('window').width * 0.45 - 2,
    maxWidth: 300,
  },
  button: {
    position: 'relative',
    width: Dimensions.get('window').width * 0.45,
    height: 'auto',
    borderRadius: 10,
    maxWidth: 300,
  },
});

export default MoviesItem;