import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AllMovies from './src/screens/AllMovies';
import Favourites from './src/screens/Favourites';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Movies" component={AllMovies} />
        <Tab.Screen name="Favorites" component={Favourites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}