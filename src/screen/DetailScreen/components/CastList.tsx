import {FlatList, Text, View} from 'react-native';
import {theme} from '../../../theme';
import {CastItem, ListSeperator} from '../../../components';
import React, {useCallback, useMemo} from 'react';
import {createGetItemLayout} from '../../../constants/helpers';
import { ICast } from '../../../types/CastType';

interface ICastlist {
  cast: ICast[];
}
const CastList: React.FC<ICastlist> = ({cast}) => {
  const horizontalGetItemLayout = useMemo(
    () => createGetItemLayout(100, 10),
    [],
  );

  const renderCastItem = useCallback(({item}: {item: ICast}) => {
    return <CastItem item={item} />;
  }, []);

  return (
    <View style={[theme.layout.gap]}>
      <Text style={[theme.text.title]}>Artist</Text>
      <FlatList
        data={cast}
        renderItem={renderCastItem}
        keyExtractor={item => item?.id?.toString()}
        horizontal
        ItemSeparatorComponent={() => <ListSeperator />}
        getItemLayout={horizontalGetItemLayout}
        initialNumToRender={Math.ceil(cast.length / 2)}
        nestedScrollEnabled
      />
    </View>
  );
};

export default CastList;
