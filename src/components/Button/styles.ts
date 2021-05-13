import { StyleSheet } from 'react-native'
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    width: '50%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white
  }
})

export default styles;