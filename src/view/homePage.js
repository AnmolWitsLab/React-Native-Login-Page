import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}> Welcome Narinder Singla </Text>
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
