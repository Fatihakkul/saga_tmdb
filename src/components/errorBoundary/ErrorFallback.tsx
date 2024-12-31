import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {FallbackProps} from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Something went wrong:</Text>
      <Text style={styles.errorMessage}>{error.message}</Text>
      <Button title="Restart" onPress={resetErrorBoundary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ErrorFallback;
