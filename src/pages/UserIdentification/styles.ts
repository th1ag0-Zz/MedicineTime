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
    fontSize: 58,
    marginBottom: 20
  },

  text: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700',
    color: colors.text_heading,
    marginBottom: 40
  },

  input: {
    textAlign: 'center',
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_light,
    fontSize: 18,
    marginBottom: 30,
    paddingVertical: 4
  }
})

export default styles;