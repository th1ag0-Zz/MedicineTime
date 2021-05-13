import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },

  emoji: {
    fontSize: 68,
    marginBottom: 35
  },

  text: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700',
    color: colors.text_heading,
    marginBottom: 15
  },

  textDescription: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.text,
    marginBottom: 35
  }
})

export default styles;