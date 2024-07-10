import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from '../Card/Card'; 
import CardSection from '../Card/CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
         <View>
         <View>
          <View style={styles.strAlbumThumbContainer}>
            <CardSection>
            <Image style={styles.strAlbumThumb} source={{ uri: props.album.strAlbumThumb }} />
            </CardSection>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTextStyle}>{props.album.title}</Text>
            <Text>{props.album.strArtist}</Text>
          </View>
         </View>
         </View>
      </CardSection>
    </Card>
  
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 18,
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  strAlbumThumb: {
    height: 50,
    width: 50,
  },
  strAlbumThumbContainer: {
    justifyContent: 'center',
    alignItems: 'center', // Perbaiki penulisan properti alignItems
    marginLeft: 10,
    marginRight: 10,
  },
});

export default AlbumDetail;
