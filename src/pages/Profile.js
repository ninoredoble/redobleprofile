import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ImageBackground } from 'react-native';
import Avatar from '../components/Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';

const banner = require('../../assets/bg.gif');

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

  const notificationScale = React.useRef(new Animated.Value(1)).current;
  const darkModeScale = React.useRef(new Animated.Value(1)).current;
  const signOutScale = React.useRef(new Animated.Value(1)).current; // For Sign Out icon

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleNotifications = () => {
    Animated.timing(notificationScale, {
      toValue: 1.2,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setNotifications(!notifications);
      Animated.spring(notificationScale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  };

  const toggleDarkMode = () => {
    Animated.timing(darkModeScale, {
      toValue: 1.2,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      toggleTheme();
      Animated.spring(darkModeScale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleSignOut = () => {
    Animated.timing(signOutScale, {
      toValue: 1.2,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // Trigger sign out action (you can add your sign-out logic here)
      Animated.spring(signOutScale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      
      {/* Banner at the top */}
      <ImageBackground source={banner} style={styles.banner}>
      </ImageBackground>

      <View style={styles.avatarContainer}>
        <Avatar size={100} />
      </View>

      <View style={styles.nameContainer}>
        <Text style={[styles.firstName, { color: currentTheme.text }]}>G. Niño Emmanuel G.</Text>
        <Text style={[styles.surname, { color: currentTheme.text }]}>Redoble</Text>
        <Text style={[styles.joinDate, { color: currentTheme.text }]}>Joined 3 year ago</Text>
      </View>

      <Text style={[styles.sectionHeader, { color: currentTheme.text }]}>Profile</Text>
      <View style={styles.divider} />

      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.label, { color: currentTheme.text }]}>Manage Users</Text>
        <TouchableOpacity>
          <Icon name="users" size={26} color={currentTheme.text} />
        </TouchableOpacity>
      </View>

      <Text style={[styles.sectionHeader, { color: currentTheme.text }]}>Settings</Text>
      <View style={styles.divider} />

      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.label, { color: currentTheme.text }]}>Notifications</Text>
        <TouchableOpacity onPress={toggleNotifications}>
          <Animated.View style={{ transform: [{ scale: notificationScale }] }}>
            <Icon name={notifications ? "bell" : "bell-slash"} size={26} color={currentTheme.text} />
          </Animated.View>
        </TouchableOpacity>
      </View>

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

      <TouchableOpacity style={[styles.button, { backgroundColor: currentTheme.buttonBackground }]} onPress={handleSignOut}>
        <Animated.View style={{ transform: [{ scale: signOutScale }] }}>
          <Icon name="sign-out" size={20} color={currentTheme.buttonText} />
        </Animated.View>
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
  banner: {
    width: '150%',
    height: 220, // Adjust height for the banner as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
    marginTop: -40,
  },
  avatarContainer: {
    position: 'absolute', // Make it overlap
    top: 100, // Adjust this to control how much it overlaps
    zIndex: 1, // Bring the avatar above the banner
    alignSelf: 'center',
  },
  nameContainer: {
    marginTop: 60, // Adjust spacing below the avatar
    alignItems: 'center', // Center name text below avatar
  },
  sectionHeader: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginVertical: 10,
    marginLeft: 50,
    marginBottom: -5,
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  firstName: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    marginBottom: -5,
  },
  surname: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
  },
  joinDate: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default Profile;
