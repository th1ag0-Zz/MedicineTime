import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';

import Button from '../../components/Button';
import colors from '../../utils/colors';
import styles from './styles';

const Confimation: React.FC = () => {

  const { navigate } = useNavigation()

  function handleStart() {
    navigate('MedicineForm')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.emoji}>
          😆
        </Text>

        <Text style={styles.text}>
          Tudo certo
        </Text>

        <Text style={styles.textDescription}>
          Agora vamos começar a agendar{'\n'}seus horários
        </Text>

        <Button title="Começar" onPress={handleStart} />
      </View>
  );
}

export default Confimation;