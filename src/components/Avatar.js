import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../../assets/avatar.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Avatar;
