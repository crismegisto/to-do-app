import { StyleSheet } from 'react-native';

const DEFAULT_SPACE = 10;

const styles = StyleSheet.create({
  button: {
    width: DEFAULT_SPACE * DEFAULT_SPACE,
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: DEFAULT_SPACE,
    borderRadius: DEFAULT_SPACE
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default styles;
