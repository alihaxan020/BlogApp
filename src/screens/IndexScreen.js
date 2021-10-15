import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Context} from '../context/BlogContext';

const IndexScreen = ({navigation}) => {
  //Destructuring the Value passed to useContext
  const {state, deleteBlogPost, getBlogPosts} = useContext(Context);
  useEffect(() => {
    getBlogPosts();
    const unsubscribe = navigation.addListener('focus', () => {
      getBlogPosts();
    });
    return unsubscribe;
  }, []);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ShowScreen', {id: item.id})}>
            <View style={[styles.row]}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <EvilIcons name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default IndexScreen;

IndexScreen.navigationOptions = () => {
  return {
    headerRight: <Feather name="plus" size={30} color="green" />,
  };
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'green',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    fontSize: 30,
    color: 'red',
  },
});
