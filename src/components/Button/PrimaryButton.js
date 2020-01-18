import React from 'react';

import { BaseButton } from './BaseButton';
import { Color } from '../../typings/Color';

export const PrimaryButton = ({ style, text, onPress }) => {
  return (
    <BaseButton
      style={style}
      text={text}
      onPress={onPress}
      backgroundColor={Color.Teal700}
      pressedBackgroundColor={Color.Teal800}
      color={Color.White}
    />
  );
};
