import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native'

// Import local
import { exampleRequest } from './action'

class Example extends PureComponent {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  render() {
    const { data } = this.props
    const Spinner = <ActivityIndicator size="large" color="red" style={styles.indicator} />

    return (
      <View>
        {data.isLoading ? (
          Spinner
        ) : (
          <ScrollView>
            {data.posts.map(item => (
              <View key={item.id} style={styles.content}>
                <Text>
                  ID:
                  {`${item.id}`}
                </Text>
                <Text>
                  Title:
                  {`${item.title}`}
                </Text>
                <Text>
                  Thread:
                  {`${item.body}`}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: { padding: 25 },
  indicator: { marginVertical: Dimensions.get('window').height / 2.5 },
})

const mapStateToProps = state => ({ data: state.example })

const mapDispatchToProps = dispatch => ({ getPosts: () => dispatch(exampleRequest()) })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example)
