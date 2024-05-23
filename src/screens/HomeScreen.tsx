import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AddMealButton from '../components/AddMealButton';
import { RootStackParamList } from '../types'; // Adjust the path if necessary

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleAddMealPress = () => {
    navigation.navigate('Meal');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meals with Calories</Text>
      <AddMealButton onPress={handleAddMealPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
