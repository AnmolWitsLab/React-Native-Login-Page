import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const RegisterPage = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
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
        <Button title="Register" />
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
