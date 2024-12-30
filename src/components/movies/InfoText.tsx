import {Text, View} from 'react-native';
import {theme} from '../../theme';

interface IInfoTextProps {
  title: string;
  value: string;
}

const InfoText: React.FC<IInfoTextProps> = ({title, value}) => {
  return (
    <View>
      <Text style={[theme.text.title]}>{value}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default InfoText;
