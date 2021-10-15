import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={{marginHorizontal: 10, marginTop: 10}}>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
        autoCapitalize="none"
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        multiline={true}
        onChangeText={text => setContent(text)}
        autoCapitalize="none"
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};
export default BlogPostForm;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },
});
