import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, PlaceInput, PlaceDetail } from './src/components/';
import placeImage from './src/assets/1.jpeg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './src/store/actions/places';

class App extends React.Component {

  handlePlaceSubmit = (placeName) => {
    if (placeName.trim() === "") {
      return;
    }
    this.props.actions.addPlace(placeName);
  };

  handleModalClose = () => {
    this.props.actions.deselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.props.actions.deletePlace}
          onModalClosed={this.handleModalClose}
        />
        <PlaceInput
          onPress={this.handlePlaceSubmit}
        />
        <List
          places={this.props.places}
          onItemSelected={this.props.actions.selectPlace}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);