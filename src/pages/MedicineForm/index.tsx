import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const MedicineForm: React.FC = () => {

  const [userName, setUserName] = useState<string>()

  useEffect(() => {

    async function loadName() {
      const user = await AsyncStorage.getItem('@medicinetime:user')
      setUserName(user || '')
    }

    loadName()

  }, [])

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Olá, {userName}
      </Text>

      <Text style={{ textAlign: "center", fontSize: 18 }}>
        Desculpe, mas este App ainda está em desenvolvimento.{"\n"}
        Por favor, aguarde as próximas versões.
      </Text>
    </View>
  );
};

export default MedicineForm;
