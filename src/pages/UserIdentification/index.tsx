import React, { useState } from 'react';
import {
  Text, 
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Button from '../../components/Button';
import colors from '../../utils/colors';
import styles from './styles';

const UserIdentification: React.FC = () => {

  const [name, setName] = useState<string>()
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setName(value)
    setIsFilled(!!value)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.emoji}>
          {isFilled ? '😄' : '😁'}
        </Text>

        <Text style={styles.text}>
          Como podemos{'\n'}chamar você?
        </Text>

        <TextInput
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onChangeText={handleInputChange}
          style={[
            styles.input,
            (isFocused || isFilled) && {borderBottomColor: colors.green}
          ]}
        />

        <Button title="Confirmar"/>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default UserIdentification;