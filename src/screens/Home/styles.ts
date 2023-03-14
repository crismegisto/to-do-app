import { StyleSheet } from 'react-native';

const DEFAULT_SPACE = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    height: DEFAULT_SPACE * 2,
    width: '100%',
    bottom: DEFAULT_SPACE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: DEFAULT_SPACE * 5,
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: DEFAULT_SPACE / 2,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default styles;
