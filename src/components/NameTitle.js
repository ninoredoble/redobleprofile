import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// Functional component to display a user's name and join date
const NameTitle = ({ name, joinDate, textColor, loading }) => {
  return (
    <View style={styles.container}>
      {loading ? ( // Show loader if data is still loading
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <>
          {/* Display the user's name with specified text color */}
          <Text style={[styles.name, { color: textColor }]}>{name}</Text>
        </>
      )}
    </View>
  );
};

// StyleSheet to define the component styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center content horizontally
    marginVertical: 20,   // Vertical margin for spacing
    paddingHorizontal: 15, // Horizontal padding for spacing
    paddingVertical: 10,   // Vertical padding for spacing
  },
  name: {
    fontSize: 24,         // Font size for the name
    fontFamily: 'Poppins-Bold', // Bold font for the name
    textShadowColor: '#000', // Shadow color for text
    textShadowOffset: {     // Offset for the text shadow
      width: 0,
      height: 1,
    },
    textShadowRadius: 3,    // Blur radius for text shadow
  },
  joinDate: {
    fontSize: 16,         // Font size for the join date
    fontFamily: 'Poppins-Regular', // Regular font for the join date
    marginTop: 5,         // Space between name and join date
  },
});

// Export the NameTitle component for use in other parts of the application
export default NameTitle;
