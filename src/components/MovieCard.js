import { Image, StyleSheet, Text, View } from 'react-native';

const MovieCard = ({ title, description, imageUrl, isFavorite }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {isFavorite && <Text style={styles.favorite}>★</Text>}
      </View>
      
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#72705077',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  favorite: {
    fontSize: 14,
    fontWeight: '600',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});

export default MovieCard;