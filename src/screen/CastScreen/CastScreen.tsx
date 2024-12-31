import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../redux/store';
import {TRootStackParamlis} from '../../types/navigationTypes/RootStackParamList';
import {Container, Header} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {theme} from '../../theme';
import {fetchArtistDetailRequest} from '../../redux/actions/artistAction';
import TitleWithDescription from '../../components/cards/TitleWithDescription';
import CastHeader from './components/CastHeader';

type ArtistDetailRouteProp = RouteProp<TRootStackParamlis, 'ArtistDetail'>;

const ArtistDetail = ({route}: {route: ArtistDetailRouteProp}) => {
  const {artistId} = route.params;
  const navigation = useAppNavigation();
  const dispatch = useDispatch();
  const {artist} = useTypedSelector(state => state.artist);

  useEffect(() => {
    dispatch(fetchArtistDetailRequest(artistId.toString()));
  }, [artistId, dispatch]);

  return (
    <Container>
      <Header goBack={navigation.canGoBack()} title="Artist Detail" />
      <ScrollView
        style={style.container}
        contentContainerStyle={[theme.layout.gap]}>
        <CastHeader artist={artist} />
        <View style={[theme.layout.w100]}>
          <TitleWithDescription
            title="Biography"
            description={artist.biography}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const style = StyleSheet.create({
  container: {
    ...theme.layout.gap2X,
    ...theme.layout.marginTop,
    ...theme.layout.paddingX,
  },
});

export default ArtistDetail;
