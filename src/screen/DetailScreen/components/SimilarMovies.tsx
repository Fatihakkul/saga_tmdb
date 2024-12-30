import React, {useCallback, useMemo} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../../../types/movieType';
import SimilarItem from '../../../components/items/SimilarItem';
import {ListSeperator} from '../../../components';
import {theme} from '../../../theme';
import {createGetItemLayout} from '../../../constants/helpers';

interface ISimilarMovies {
  similar: Movie[];
}

const SimilarMovies: React.FC<ISimilarMovies> = ({similar}) => {
  const horizontalGetItemLayout = useMemo(
    () => createGetItemLayout(100, 10),
    [],
  );

  const renderMovieItem = useCallback(
    ({item}: {item: Movie}) => <SimilarItem item={item} />,
    [],
  );

  return (
    <View style={[theme.layout.gap]}>
      <Text style={[theme.text.title]}>Similar</Text>
      <FlatList
        data={similar}
        renderItem={renderMovieItem}
        keyExtractor={item => item?.id?.toString()}
        horizontal
        ItemSeparatorComponent={() => <ListSeperator />}
        getItemLayout={horizontalGetItemLayout}
        initialNumToRender={Math.ceil(similar.length / 2)}
        nestedScrollEnabled
      />
    </View>
  );
};

export default SimilarMovies;
