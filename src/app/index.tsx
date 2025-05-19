import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  const handlePress = () => {
    console.log('Current text value:', text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Enter text' 
        style={styles.inputText} 
        multiline 
        value={text}
        onChangeText={setText}
      />

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonTxt}>Convert To Audio</Text>
      </Pressable>
    </View>
  );}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  inputText: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 20,
    minHeight: 100,
  },
  button:{
    backgroundColor: '#000',
    width: '90%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonTxt:{
    color: '#fff',
    fontSize: 17,
    fontWeight: 'semibold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  }
});
