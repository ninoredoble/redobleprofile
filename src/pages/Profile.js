import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
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

const Profile = ({ isDarkMode, toggleTheme }) => {
  const [notifications, setNotifications] = React.useState(true);

  // Animated values for the icons
  const notificationScale = React.useRef(new Animated.Value(1)).current;
  const darkModeScale = React.useRef(new Animated.Value(1)).current;

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleNotifications = () => {
    Animated.timing(notificationScale, {
      toValue: 1.2, // Scale up
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setNotifications(!notifications);
      Animated.spring(notificationScale, {
        toValue: 1, // Scale back
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  };

  const toggleDarkMode = () => {
    Animated.timing(darkModeScale, {
      toValue: 1.2, // Scale up
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      toggleTheme();
      Animated.spring(darkModeScale, {
        toValue: 1, // Scale back
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <View style={styles.profileContainer}>
        <Avatar />
        <View style={styles.nameContainer}>
          <Text style={[styles.firstName, { color: currentTheme.text }]}>G. Niño Emmanuel G.</Text>
          <Text style={[styles.surname, { color: currentTheme.text }]}>Redoble</Text>
          {/* Moved join date under the names */}
          <Text style={[styles.joinDate, { color: currentTheme.text }]}>1 year ago</Text>
        </View>
      </View>

      {/* Profile Section Header */}
      <Text style={[styles.sectionHeader, { color: currentTheme.text }]}>Profile</Text>
      <View style={styles.divider} />

      {/* Manage Users Card */}
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.label, { color: currentTheme.text }]}>Manage Users</Text>
        <TouchableOpacity>
          <Icon name="users" size={24} color={currentTheme.text} />
        </TouchableOpacity>
      </View>

      {/* Settings Section Header */}
      <Text style={[styles.sectionHeader, { color: currentTheme.text }]}>Settings</Text>
      <View style={styles.divider} />

      {/* Notifications Icon */}
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.label, { color: currentTheme.text }]}>Notifications</Text>
        <TouchableOpacity onPress={toggleNotifications}>
          <Animated.View style={{ transform: [{ scale: notificationScale }] }}>
            <Icon name={notifications ? "bell" : "bell-slash"} size={24} color={currentTheme.text} />
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
              size={24} 
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    marginTop: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Space below the profile section
  },
  nameContainer: {
    marginLeft: 15, // Space between the avatar and the name
    justifyContent: 'center', // Center the names vertically
  },
  sectionHeader: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginVertical: 10,
    marginLeft: 50,
    marginBottom: -8,
    textAlign: 'left',
    width: '100%',
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  firstName: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    marginBottom: -10,
  },
  surname: {
    fontSize: 35,
    fontFamily: 'Poppins-Bold',
  },
  joinDate: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default Profile;
