import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';

// Avatar component that animates on press
const Avatar = () => {
  // Animated value to control the scaling of the avatar
  const [scale] = useState(new Animated.Value(1));
  const [loading, setLoading] = useState(true); // State to manage image loading

  // Handle the press in event to scale up the avatar
  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1, // Scale up by 10%
      friction: 3,  // Damping effect
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  // Handle the press out event to scale back to original size
  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1, // Scale back to original size
      friction: 3, // Damping effect
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  // Handle image load event
  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when image is loaded
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8} // Reduce opacity on press
        onPressIn={handlePressIn} // Trigger scaling up on press in
        onPressOut={handlePressOut} // Trigger scaling down on press out
        accessible={true} // Make this button accessible
        accessibilityLabel="User Avatar" // Accessibility label
      >
        <Animated.View style={{ transform: [{ scale }] }}>
          {loading && (
            <View style={styles.loader}>
              <ActivityIndicator size="small" color="#000" />
            </View>
          )}
          {/* Avatar image with scaling animation */}
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar.png')} // Replace with your avatar image path
            onLoad={handleImageLoad} // Trigger load handler
            onLoadStart={() => setLoading(true)} // Show loader on image load start
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Avatar component
const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center content horizontally
    marginVertical: 20,   // Vertical margin for spacing
  },
  avatar: {
    width: 150,           // Width of the avatar
    height: 150,          // Height of the avatar
    borderRadius: 75,     // Circular shape
    shadowColor: '#000',  // Shadow color
    shadowOffset: {
      width: 0,           // No horizontal shadow
      height: 3,          // Vertical shadow
    },
    shadowOpacity: 0.3,   // Opacity of the shadow
    shadowRadius: 6,      // Blur radius of the shadow
    elevation: 5,         // Elevation for Android shadow
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for loader
    borderRadius: 75, // Match the avatar shape
  },
});

// Export the Avatar component for use in other parts of the application
export default Avatar;
