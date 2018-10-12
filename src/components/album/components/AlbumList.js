// @flow
import * as React from 'react'
import { Text, ScrollView, Linking } from 'react-native'
import type { Album } from './Card'
import Card from './Card'

type Props = {
  fetchAlbums: Function,
  albums: Array<Album>,
  loading: boolean,
}

export default class AlbumList extends React.Component<Props> {
  componentDidMount() {
    const { fetchAlbums } = this.props
    fetchAlbums()
  }

  renderAlbums = () => {
    const { albums, loading } = this.props
    if (loading) {
      return <Text>Loading...</Text>
    }
    return albums.map(
      (album: Album): React.Node => (
        <Card key={album.title} album={album} handleClick={() => this.handleClick(album.url)} />
      ),
    )
  }

  handleClick = (url) => {
    Linking.openURL(url)
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>
  }
}
