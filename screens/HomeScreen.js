import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Meu App de Músicas
      </Text>

      <Button
        title="Cadastrar Música"
        onPress={() => navigation.navigate('Cadastro')}
      />

      <View style={{ marginTop: 10 }} />

      <Button
        title="Ver Lista"
        onPress={() => navigation.navigate('Lista')}
      />

    </View>
  );
}