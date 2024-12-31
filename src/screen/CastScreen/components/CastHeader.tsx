import {StyleSheet, Text, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {IArtistDetails} from '../../../types/CastType';
import {InfoText} from '../../../components';
import {theme} from '../../../theme';
import {deviceLayoutMetric} from '../../../constants/utils';

interface ICastHeader {
  artist: IArtistDetails;
}

const CastHeader: React.FC<ICastHeader> = ({artist}) => {
  return (
    <View style={style.headerContainer}>
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w200${artist.profile_path}`,
          priority: FastImage.priority.high,
        }}
        style={style.image}
        resizeMode="stretch"
      />
      <View style={[style.infoContainer]}>
        <Text style={style.name}>{artist.name}</Text>
        <InfoText
          style={style.columnReverse}
          title="Known for"
          value={artist.known_for_department}
        />
        <InfoText
          style={style.columnReverse}
          title="Gender"
          value={artist.gender === 1 ? 'Female' : 'Male'}
        />
        <InfoText
          style={style.columnReverse}
          title="Birthday"
          value={artist.birthday}
        />
        <InfoText
          style={style.columnReverse}
          title="Place of Birth"
          value={artist.place_of_birth}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  name: {
    ...theme.text.title,
    ...theme.text.colorLabel,
  },
  infoContainer: {
    ...theme.layout.gap,
    ...theme.layout.alignStart,
    width: '40%',
  },
  headerContainer: {
    ...theme.layout.flexDirectionRow,
    ...theme.layout.gap,
    ...theme.layout.w100,
  },
  image: {
    borderRadius: 10,
    height: verticalScale(240),
    marginTop: 5,
    width: deviceLayoutMetric.deviceWidth * 0.5,
    maxWidth: 300,
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
});

export default CastHeader;
