import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Users = user => {
  return (
    <View style={styles.container}>
      <Text>
        Name: {user.firstName} {user.lastName}
      </Text>
      <Text>Age: {user.age}</Text>
      <Text>Domain: {user.domain}</Text>
      <Image source={{uri: user.image}} />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
    borderWidth: 2,
    gap: 5,
    borderColor: 'whitesmoke',
  },
});
