import { StyleSheet } from 'react-native';

const DEFAULT_SPACE = 10;
const ICON_SIZE = 24;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    margin: DEFAULT_SPACE,
    borderRadius: DEFAULT_SPACE,
    paddingHorizontal: DEFAULT_SPACE,
    flexDirection: 'row',
    alignItems: 'center'
  },
  touchEdit: {
    flex: 1,
    height: '100%',
    justifyContent: 'center'
  },
  text: {
    marginHorizontal: DEFAULT_SPACE
  },
  checkBox: {
    padding: 5
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    tintColor: 'red'
  }
});

export default styles;
