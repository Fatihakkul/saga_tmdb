import {Pressable} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GoBack = () => {
  const navigation = useAppNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <AntDesign name="left" color={'black'} size={25} />
    </Pressable>
  );
};

export default GoBack;
