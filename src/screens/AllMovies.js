import { View, FlatList } from 'react-native';
import movies from '../data/movies';
import MovieCard from '../components/MovieCard';

export default function AllMovies() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard 
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            isFavorite={item.isFavorite}
          />
        )}
      />
    </View>
  );
}