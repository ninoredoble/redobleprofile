import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Avatar from '../components/Avatar';
import NameTitle from '../components/NameTitle';
import Icon from 'react-native-vector-icons/FontAwesome';

// Define light and dark theme palettes
const lightTheme = {
  background: '#F9F9F9',
  text: '#000',
  card: '#FFF',
  buttonBackground: '#EAEAEA',
  buttonText: '#000',
};

const darkTheme = {
  background: '#1C1C1E',
  text: '#FFF',
  card: '#2C2C2E',
  buttonBackground: '#3A3A3C',
  buttonText: '#FFF',
};

// Profile component
const Profile = ({ isDarkMode, toggleTheme }) => {
  const [notifications, setNotifications] = React.useState(true);

  // Animated values for the icons
  const notificationScale = React.useRef(new Animated.Value(1)).current;
  const darkModeScale = React.useRef(new Animated.Value(1)).current;

  // Determine the current theme based on dark mode state
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  // Toggle notifications with animation
  const toggleNotifications = () => {
    Animated.timing(notificationScale, {
      toValue: 1.2, // Scale up
      duration: 200, // Animation duration
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      setNotifications(!notifications); // Toggle notification state
      Animated.spring(notificationScale, {
        toValue: 1, // Scale back to original size
        friction: 3, // Damping effect
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    });
  };

  // Toggle dark mode with animation
  const toggleDarkMode = () => {
    Animated.timing(darkModeScale, {
      toValue: 1.2, // Scale up
      duration: 200, // Animation duration
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      toggleTheme(); // Toggle the theme
      Animated.spring(darkModeScale, {
        toValue: 1, // Scale back to original size
        friction: 3, // Damping effect
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <View style={styles.profileContainer}>
        <Avatar />
        <View style={styles.nameContainer}>
          {/* Display user name and join date */}
          <Text style={[styles.firstName, { color: currentTheme.text }]}>G. Niño Emmanuel G.</Text>
          <Text style={[styles.surname, { color: currentTheme.text }]}>Redoble</Text>
          <Text style={[styles.joinDate, { color: currentTheme.text }]}>Joined 3 year ago</Text>
        </View>
      </View>

      <Text style={[styles.sectionHeader, { color: currentTheme.text }]}>Profile</Text>
      <View style={styles.divider} />

      {/* Manage Users Card */}
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.label, { color: currentTheme.text }]}>Manage Users</Text>
        <TouchableOpacity>
          <Icon name="users" size={26} color={currentTheme.text} />
        </TouchableOpacity>
      </View>

      <Text style={[styles.sectionHeader, { color: currentTheme.text }]}>Settings</Text>
      <View style={styles.divider} />

      {/* Notifications Icon */}
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.label, { color: currentTheme.text }]}>Notifications</Text>
        <TouchableOpacity onPress={toggleNotifications}>
          <Animated.View style={{ transform: [{ scale: notificationScale }] }}>
            <Icon name={notifications ? "bell" : "bell-slash"} size={26} color={currentTheme.text} />
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Dark Mode Icon */}
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.label, { color: currentTheme.text }]}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Animated.View style={{ transform: [{ scale: darkModeScale }] }}>
            <Icon 
              name={isDarkMode ? "sun-o" : "moon-o"} 
              size={26} 
              color={isDarkMode ? '#FFFF8F' : currentTheme.text} 
            />
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: currentTheme.buttonBackground }]}>
        <Text style={[styles.buttonText, { color: currentTheme.buttonText }]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Profile component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the screen
    alignItems: 'center', // Center content horizontally
    padding: 20, // Padding around the content
  },
  profileContainer: {
    marginTop: '30%', // Top margin for positioning
    flexDirection: 'row', // Arrange avatar and name in a row
    alignItems: 'center', // Center vertically
    marginBottom: 10, // Space below the profile section
  },
  nameContainer: {
    marginLeft: 15, // Space between avatar and name
  },
  sectionHeader: {
    fontSize: 22, // Font size for section headers
    fontFamily: 'Poppins-Bold', // Bold font for headers
    marginVertical: 10, // Vertical margin for spacing
    marginLeft: 50, // Left margin for positioning
    marginBottom: -5, // Minor adjustment for spacing
    textAlign: 'left', // Left align the text
    width: '100%', // Full width for the header
  },
  divider: {
    width: '90%', // Width of the divider line
    height: 1, // Height of the divider
    backgroundColor: '#E0E0E0', // Color of the divider
    marginVertical: 5, // Vertical spacing for the divider
  },
  card: {
    flexDirection: 'row', // Arrange card content in a row
    justifyContent: 'space-between', // Space between items
    alignItems: 'center', // Center content vertically
    width: '90%', // Width of the card
    padding: 15, // Padding inside the card
    marginVertical: 10, // Vertical spacing for cards
    borderRadius: 12, // Rounded corners
    elevation: 4, // Elevation for shadow on Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3, // Blur radius for shadow
  },
  label: {
    fontSize: 18, // Font size for labels
    fontFamily: 'Poppins-Regular', // Regular font for labels
  },
  button: {
    marginTop: 20, // Top margin for button spacing
    paddingVertical: 15, // Vertical padding for button
    paddingHorizontal: 30, // Horizontal padding for button
    borderRadius: 8, // Rounded corners for the button
    elevation: 2, // Elevation for shadow on Android
  },
  buttonText: {
    fontSize: 16, // Font size for button text
    fontFamily: 'Poppins-Regular', // Regular font for button text
  },
  firstName: {
    fontSize: 22, // Font size for the first name
    fontFamily: 'Poppins-Regular', // Regular font for first name
    marginBottom: -10, // Minor adjustment for spacing
  },
  surname: {
    fontSize: 36, // Font size for the surname
    fontFamily: 'Poppins-Bold', // Bold font for surname
  },
  joinDate: {
    fontSize: 16, // Font size for join date
    fontFamily: 'Poppins-Regular', // Regular font for join date
  },
});

// Export the Profile component for use in other parts of the application
export default Profile;
