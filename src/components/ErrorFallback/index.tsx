import React from 'react';
import { Text, View, Button } from 'react-native';
import { FallbackProps } from 'react-error-boundary';

import styles from './styles';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <View style={styles.container}>
      <Text>{error.message}</Text>
      <Button title="Try Again" onPress={resetErrorBoundary} />
    </View>
  );
}

export default ErrorFallback;
