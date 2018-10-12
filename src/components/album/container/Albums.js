// @flow
import { connect } from 'react-redux'
import AlbumList from '../components/AlbumList'
import { fetchAlbums } from '../../../../redux/actions/albums'
import { albumList } from '../../../../redux/selectors/albums'
import { status } from '../../../../redux/selectors/common'

const mapStateToProps = (state: Object): Object => ({
  albums: albumList(state),
  loading: status(state),
})

export default connect(
  mapStateToProps,
  { fetchAlbums },
)(AlbumList)
