import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme';
import {Movie} from '../../types/movieType';

interface IMovieInfoCard {
  movie: Movie;
}

const MovieInfoCard: React.FC<IMovieInfoCard> = ({movie}) => {
  return (
    <View style={style.container}>
      <Text style={{width:'60%'}} numberOfLines={1}>{movie.title}</Text>
      <Text>{movie.vote_average.toFixed(1)}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    ...theme.layout.pAbsolute,
    ...theme.layout.w100,
    ...theme.layout.paddingY,
    ...theme.layout.flexDirectionRow,
    ...theme.layout.justifyBetween,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    bottom: -5,
    right: 0,
    left: 0,
  },
});

export default MovieInfoCard;
