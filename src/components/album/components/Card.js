// @flow
import React from 'react'
import {
  Text, View, StyleSheet, Image,
} from 'react-native'
import Button from '../../common/Button'

export type Album = {
  title: string,
  artist: string,
  url: string,
  image: string,
  thumbnail_image: string,
}
type Props = {
  album: Album,
  handleClick: Function,
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 0,
    marginTop: 0,
    borderRadius: 2,
    padding: 5,
    flexDirection: 'row',
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 5,
  },
  albumImage: {
    // flex: 1,
    // width: 100,
    height: 300,
    backgroundColor: '#000',
  },
  mainContainer: {
    margin: 5,
    borderRadius: 2,
    padding: 5,
  },
})

const Card = ({ album, handleClick }: Props) => (
  <View style={styles.mainContainer}>
    <View style={styles.container}>
      <Image style={{ width: 50, height: 50 }} source={{ uri: album.thumbnail_image }} />
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </View>
    <View style={styles.container}>
      <Image style={{ flex: 1, height: 300 }} source={{ uri: album.image }} />
    </View>
    <View style={styles.container}>
      <Button handleClick={handleClick}>Buy Now</Button>
    </View>
  </View>
)

export default Card
