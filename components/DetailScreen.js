import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.imageLarge} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.phone}>{friend.phone}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imageLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  phone: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginVertical: 20,
  },
});

export default DetailScreen;
