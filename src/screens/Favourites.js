import { View, FlatList, StyleSheet } from 'react-native';
import movies from '../data/movies';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
  const favoriteMovies = movies.filter(movie => movie.isFavorite === true);

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard 
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            isFavorite={item.isFavorite}
          />
        )}
        ListEmptyComponent={<View style={styles.empty}><Text>No favorites yet!</Text></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5ff',
  },
  empty: {
    padding: 20,
    alignItems: 'center',
  }
});