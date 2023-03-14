import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  name: string;
  onSubmit: () => void;
}

function CustomButton({ name, onSubmit }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onSubmit}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
