import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../context/authContext';

const LoginPage = ({navigation}) => {
  const getDataUsingGet = () => {
    fetch('https://reqres.in/api/users?page=2', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );
  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

  const handleSubmit = () => {
    if (validEmail.test(email) && validPassword.test(password)) {
      navigation.navigate('Home');
    } else {
      alert('Invalid Email or Password');
    }
  };

  const val = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);
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
            getDataUsingGet();
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
