import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function CadastroMusica({ navigation, musicas, setMusicas }) {
  const [nome, setNome] = useState('');
  const [artista, setArtista] = useState('');

  function salvar() {
    if (nome.trim() === '' || artista.trim() === '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const novaMusica = { nome, artista };

    setMusicas([...musicas, novaMusica]);

    setNome('');
    setArtista('');

    navigation.navigate('Lista');
  }

  return (
    <View style={{ padding: 20 }}>

      <Text>Nome da música:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Artista:</Text>
      <TextInput
        value={artista}
        onChangeText={setArtista}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Salvar" onPress={salvar} />

    </View>
  );
}