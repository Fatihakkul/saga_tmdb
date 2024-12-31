import {Text, View, ViewStyle, StyleProp} from 'react-native';
import {theme} from '../../theme';

interface IInfoTextProps {
  title: string;
  value?: string | null;
  style?: StyleProp<ViewStyle>;
}

const InfoText: React.FC<IInfoTextProps> = ({title, value, style}) => {
  return (
    <View style={style}>
     {value && <Text style={[theme.text.title]}>{value}</Text>}
      <Text style={[theme.text.font_12, theme.text.colorGray_400]}>
        {title}
      </Text>
    </View>
  );
};

export default InfoText;
