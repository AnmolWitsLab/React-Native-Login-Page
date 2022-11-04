import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({navigation}) => {
  useEffect(() => {
    readData();
  }, []);

  const [input, setInput] = useState();
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setInput(value);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      const value = await AsyncStorage.getItem('token');
      console.log('value', value);
      navigation.navigate('Login');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Welcome</Text>
      <Text>{input}</Text>
      <Button title="logout" onPress={clearStorage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
