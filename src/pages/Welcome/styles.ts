import { Dimensions, StatusBar, StyleSheet } from 'react-native'
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
    backgroundColor: colors.white
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text_heading
  },

  image: {
    height: Dimensions.get('window').width * 0.75
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.text
  }
})

export default styles;