import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {AuthContext} from '../context/authContext';

const RegisterPage = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const val = useContext(AuthContext);

  const validUsername = new RegExp(
    '^^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$',
  );

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );
  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

  const validConfirmPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

  const handleSubmit = () => {
    if (
      validEmail.test(email) &&
      validPassword.test(password) &&
      validUsername.test(userName) &&
      validConfirmPassword.test(confirmPassword)
    ) {
      navigation.navigate('Home');
    } else {
      alert('Invalid Username or Password');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <Text>{val}</Text>

        <TextInput
          style={styles.input}
          value={userName}
          placeholder="User Name"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setUserName(text)}
        />
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
        <TextInput
          style={styles.input}
          value={confirmPassword}
          placeholder="Confirm Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)}
        />
        <Button
          title="Signup"
          onPress={() => {
            handleSubmit();
          }}
        />
        <View style={styles.wrapperText}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} />
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
});
export default RegisterPage;
