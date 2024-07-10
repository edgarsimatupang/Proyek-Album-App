import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import AlbumDetail from './AlbumDetail';

const Albumlist = (props) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://theaudiodb.com/api/v1/json/2/album.php?i=112024')
      .then(response => response.json())
      .then(data => setAlbums(data.album)) 
      .catch(error => console.error(error)); 
  }, []);

  return (
    <ScrollView>
      {!albums.length ? (
        <View style={styles.centered}> 
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        albums.map((album, index) => (
          <AlbumDetail key={index} album={album} /> 
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Albumlist;