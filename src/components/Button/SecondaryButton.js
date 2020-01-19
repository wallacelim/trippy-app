import React from 'react';

import { BaseButton } from './BaseButton';
import { Color } from '../../typings/Color';

export const SecondaryButton = ({ style, text, onPress }) => {
  return (
    <BaseButton
      style={style}
      text={text}
      onPress={onPress}
      backgroundColor={Color.White}
      pressedBackgroundColor={Color.Gray400}
      color={Color.Gray800}
    />
  );
};
