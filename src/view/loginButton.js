import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoginButton = () => {
  return (
    <View style={styles.wrapperButton}>
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperButton: {
    alignItems: 'center',
  },
  wrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    borderWidth: 1,
    width: 100,
    borderRadius: 5,
  },

  wrapperText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
});

export default LoginButton;