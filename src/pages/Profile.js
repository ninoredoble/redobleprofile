import React from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity } from 'react-native';
import Avatar from '../components/Avatar';
import NameTitle from '../components/NameTitle';

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

  // Select the current theme based on isDarkMode prop
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <Avatar />
      <NameTitle name="David Robinson" joinDate="1 year ago" />

      {/* Notifications Switch */}
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.label, { color: currentTheme.text }]}>Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notifications ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      {/* Dark Mode Toggle */}
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.label, { color: currentTheme.text }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        />
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
    fontWeight: 'bold',
  },
});

export default Profile;
