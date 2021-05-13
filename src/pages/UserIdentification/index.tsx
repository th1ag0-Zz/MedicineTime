import React, { useState } from 'react';
import {
  Text, 
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Button';
import colors from '../../utils/colors';
import styles from './styles';

const UserIdentification: React.FC = () => {

  const { navigate } = useNavigation()

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

   async function handleConfirmation() {

    if (!name)
      return Alert.alert('Me diz como chamar você, por favor 🥺')

    try {
      await AsyncStorage.setItem('@medicinetime:user', name)
      navigate('Confirmation')
    } catch (error) {
      Alert.alert('Não foi possível salvar o seu nome 🥺')
    }
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

        <Button title="Confirmar" onPress={handleConfirmation} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default UserIdentification;