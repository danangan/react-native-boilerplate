import React from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'

// Import local
import style from 'style/defaultStyle'
import { getProfileRequest } from './action'
import { Avatar } from 'components'

class Profile extends React.PureComponent {
  componentDidMount() {
    const { getProfile } = this.props
    getProfile()
  }

  render() {
    const { user } = this.props.profile
    const { profile } = this.props
    const Spinner = <ActivityIndicator size="large" color="red" style={styles.indicator} />

    return (
      <View style={styles.content}>
        {profile.isLoading ? (
          Spinner
        ) : (
          <View>
            <Avatar size="medium" source={user.foto_pelanggan} />
            <Text>{user.nama_pelanggan}</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    padding: style.PADDING,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  indicator: {
    marginVertical: style.DEVICE_HEIGHT / 2.5,
  },
})

const mapStateToProps = state => ({
  profile: state.profile,
})

const mapDispatchToProps = dispatch => ({ getProfile: () => dispatch(getProfileRequest()) })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile)
