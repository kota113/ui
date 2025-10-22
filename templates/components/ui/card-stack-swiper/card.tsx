import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
  onSwipedTop?: () => void;
  onSwipedBottom?: () => void;
  onSwiped?: () => void;
}

const Card: React.FC<CardProps> = ({ style = {}, children }) => (
  <View style={style}>
    {children}
  </View>
);

export default Card;