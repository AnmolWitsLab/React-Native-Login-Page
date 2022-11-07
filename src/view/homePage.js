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
      if (value) {
        setInput(value);
      }
    } catch (err) {
      console.log('err', err);
    }
  };
  const clearStorage = () => {
    AsyncStorage.removeItem('token');

    navigation.navigate('Login');
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
