import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userList} from './Redux/action';
import Users from './Users';

const UserScreen = () => {
  const dispatch = useDispatch();
  const userlist = useSelector(state => state.user);

  useEffect(() => {
    dispatch(userList());
  }, []);

  console.log('Your Users', userlist);

  return (
    <View style={styles.container}>
      <Users />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#5C5470',
  },
  item: {
    color: '#F1F0E8',
  },
});
