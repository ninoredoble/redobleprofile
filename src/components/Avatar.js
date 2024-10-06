import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Animated } from 'react-native';

const Avatar = () => {
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1, // Scale up
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1, // Scale back
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={{ transform: [{ scale }] }}>
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar.png')}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3, // Slightly increased opacity for more visibility
    shadowRadius: 6, // Increased blur radius
    elevation: 5, // Android shadow
  },
});

export default Avatar;
