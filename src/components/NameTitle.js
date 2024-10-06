import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NameTitle = ({ name, joinDate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>Joined {joinDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
});

export default NameTitle;
