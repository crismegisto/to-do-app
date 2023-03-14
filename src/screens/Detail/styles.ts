import { StyleSheet } from 'react-native';

const basicInput = {
  height: 40,
  marginVertical: 12,
  borderWidth: 1,
  padding: 10
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 14
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: basicInput,
  largeInput: {
    ...basicInput,
    height: 100
  }
});

export default styles;
