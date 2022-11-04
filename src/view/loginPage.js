import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
  const readData = async ({navigation}) => {
    console.log('navigation', navigation);
    try {
      const value = await AsyncStorage.getItem('token');
      console.log('value in starting', value);
      if (value === null) {
        navigation.navigate('Login');
        alert('User logged in');
      } else {
        navigation.navigate('Home');
        alert('User not logged in');
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };
  useEffect(() => {
    readData();
  }, []);
  const handleSubmit = () => {
    if (validEmail.test(email) && validPassword.test(password)) {
      const data = {
        username: email,
        password,
      };
      console.log('JSON.stringify(data)', JSON.stringify(data));
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log('responseJson', responseJson);
          let param = responseJson.token;
          const saveData = async () => {
            try {
              await AsyncStorage.setItem('token', param);
            } catch (e) {
              alert('Failed to save the data to the storage');
            }
          };
          saveData();

          navigation.navigate('Home');
        })
        .catch(error => {
          alert(JSON.stringify(error));
          console.error(error);
        });
    } else {
      alert('Invalid Email or Password');
    }
  };
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );
  const validPassword = new RegExp('^.*(?=.{8,})(?=.*[a-zA-Z]).*$');
  const val = useContext(AuthContext);
  const [email, setEmail] = useState('anmol');
  const [password, setPassword] = useState();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <Text>{val}</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter Your Email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter Your Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />

        <Button
          title="Login"
          onPress={() => {
            handleSubmit();
          }}
        />
        <View style={styles.wrapperText}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },

  wrapperText: {
    flexDirection: 'row',
    marginTop: 20,
  },
  link: {
    color: 'blue',
  },
});

export default LoginPage;
