import React from 'react';
import {Text, View} from 'react-native';
import {MovieDetail} from '../../../types/movieType';
import {InfoText} from '../../../components';
import {theme} from '../../../theme';
import { scale } from 'react-native-size-matters';

interface IMovieHeaderProps {
  movie: MovieDetail;
}

const MovieInfo: React.FC<IMovieHeaderProps> = ({movie}) => (
  <View style={{width: '100%', gap: scale(10)}}>
    <Text style={[theme.text.textHead1]}>{movie.title}</Text>
    <View style={[theme.layout.flexDirectionRow, theme.layout.justifyBetween]}>
      <InfoText value={movie?.original_language} title="Language" />
      <InfoText value={movie.runtime?.toString()} title="Duration" />
      <InfoText
        value={movie.vote_average?.toFixed(1)?.toString()}
        title="Rating"
      />
      <InfoText value={movie.release_date} title="Release Date" />
    </View>
    <View style={{gap:scale(5)}} >
    <Text style={[theme.text.title]}>Description</Text>
    <Text>{movie.overview}</Text>
    </View>
   
  </View>
);

export default MovieInfo;
