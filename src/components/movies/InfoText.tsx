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
      <Text style={[theme.text.font_12, theme.text.colorGray_400]}>
        {title}
      </Text>
    </View>
  );
};

export default InfoText;
