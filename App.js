import React from 'react';
import {StyleSheet, Button, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import {Provider} from './src/context/BlogContext';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IndexScreen">
          <Stack.Screen
            name="IndexScreen"
            component={IndexScreen}
            options={({navigation}) => ({
              title: 'Blogs List',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
              headerStyle: {backgroundColor: '#fccabe'},
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('CreateScreen')}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="ShowScreen"
            component={ShowScreen}
            options={({navigation, route}) => ({
              title: 'Show Blog',
              headerStyle: {backgroundColor: '#C8EDE8'},
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('EditScreen', {id: route.params.id})
                  }>
                  <FontAwesome name="pencil-square-o" size={30} color="green" />
                </TouchableOpacity>
              ),
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
            })}
          />

          <Stack.Screen
            name="CreateScreen"
            component={CreateScreen}
            options={{
              title: 'Create Blog',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
              headerStyle: {
                backgroundColor: '#7EF482',
              },
            }}
          />
          <Stack.Screen
            name="EditScreen"
            component={EditScreen}
            options={{
              title: 'Edit Blog',
              headerStyle: {
                backgroundColor: '#F5D6D7',
              },
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({});
