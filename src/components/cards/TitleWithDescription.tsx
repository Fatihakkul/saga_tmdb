import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../theme';

interface ITitleWithDescriptionProps {
  title: string;
  description: string;
}

const TitleWithDescription: React.FC<ITitleWithDescriptionProps> = ({
  title,
  description,
}) => (
  <View style={[theme.layout.w100, theme.layout.gap]}>
    <Text style={[theme.text.title]}>{title}</Text>
    <Text style={[theme.text.textSmall, theme.text.colorLabel]}>
      {description}
    </Text>
  </View>
);

export default TitleWithDescription;
