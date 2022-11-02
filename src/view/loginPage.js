import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const LoginPage = ({navigation}) => {
  const getDataUsingGet = () => {
    fetch('https://sql-dev-india.thewitslab.com:3003/auth/login', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter Your Email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter Your Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Button
          title="Login"
          onPress={() => {
            getDataUsingGet();
          }}
        />
        <View style={styles.wrapperText}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
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
