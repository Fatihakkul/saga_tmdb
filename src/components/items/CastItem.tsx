import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ICast} from '../../types/CastType';
import {TouchableOpacity} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';

interface ICastItemProps {
  item: ICast;
}

const CastItem: React.FC<ICastItemProps> = ({item}) => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate('ArtistDetail', {artistId: item.id})}>
      <View style={style.container}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w200${item.profile_path}`,
            priority: FastImage.priority.high,
          }}
          style={style.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
export default memo(CastItem);
