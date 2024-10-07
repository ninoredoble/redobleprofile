import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';

// Avatar component that animates on press
const Avatar = () => {
  const [scale] = useState(new Animated.Value(1));
  const [loading, setLoading] = useState(true);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessible={true}
        accessibilityLabel="User Avatar"
        accessibilityHint="Double tap to view profile"
      >
        <Animated.View style={[styles.avatarContainer, { transform: [{ scale }] }]}>
          {loading && (
            <View style={styles.loader}>
              <ActivityIndicator size="small" color="#000" />
            </View>
          )}
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar.gif')}
            onLoad={handleImageLoad}
            onLoadStart={() => setLoading(true)}
            onError={() => setLoading(false)}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Avatar component
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatarContainer: {
    borderRadius: 75, // Ensure this matches half the width/height for circular shape
    overflow: 'hidden', // This is crucial for clipping the image to the border radius
  },
  avatar: {
    width: 150,
    height: 150,
    // No need to set borderRadius here since it's done in the container
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 75, 
  },
});

// Export the Avatar component for use in other parts of the application
export default Avatar;
