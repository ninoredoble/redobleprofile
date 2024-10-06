import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NameTitle = ({ name, joinDate, textColor }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.name, { color: textColor }]}>{name}</Text>
      <Text style={[styles.joinDate, { color: textColor }]}>Joined {joinDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
  },
  joinDate: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
});

export default NameTitle;
