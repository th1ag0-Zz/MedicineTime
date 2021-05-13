import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import styles from './styles';

interface Button extends RectButtonProps {
  title: string;
}

const Button: React.FC<Button> = ({ title, ...rest }) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}

export default Button;