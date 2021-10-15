import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Context} from '../context/BlogContext';
const ShowScreen = ({navigation, route}) => {
  const {state} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id == route.params.id);
  return (
    <ScrollView>
      <View style={{margin: 10}}>
        <Text style={styles.label}>Title: </Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{blogPost.title}</Text>
        </View>
        <Text style={styles.label}>Content: </Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{blogPost.content}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
