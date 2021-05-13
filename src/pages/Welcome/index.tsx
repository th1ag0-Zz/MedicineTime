import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core'

import styles from './styles';

import welcomeImage from '../../assets/pessoa.png'
import Button from '../../components/Button';

const Welcome: React.FC = () => {

  const { navigate } = useNavigation()

  function handleSubmit() {
    navigate('UserIdentification')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie seu tempo{'\n'}para não perder{'\n'}a hora do remédio
      </Text>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={welcomeImage}
      />

      <Text style={styles.description}>
        Não esqueça mais de tomar seus remédios. Nós ajudaremos você a lembrar mandando uma notificação toda vez que chegar a hora.
      </Text>

      <Button
        onPress={handleSubmit}
        title="Vamos lá! 😄"
      />
    </View>
  );
}

export default Welcome;