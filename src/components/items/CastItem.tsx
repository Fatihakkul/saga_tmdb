import React, { memo } from 'react';
import {ICast} from '../../types/movieType';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface ICastItemProps {
  item: ICast;
}

const CastItem: React.FC<ICastItemProps> = ({item}) => {
  return (
    <View style={style.container}>
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w200${item.profile_path}`,
          priority: FastImage.priority.high,
        }}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};


const style = StyleSheet.create({
    container : {
        width:100,
        height:100,
        borderRadius:100,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center'

    }
})
export default memo(CastItem);
