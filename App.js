import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, PlaceInput, PlaceDetail } from './src/components/';
import uuid from 'uuid';
import placeImage from './src/assets/1.jpeg';

export default class App extends React.Component {
  state = {
    placeName:'',
    places: [],
    selectedPlace: null,
  };

  handlePlaceNameChange = val =>
		this.setState({
			placeName: val,
		});

  handlePlaceSubmit = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        placeName: "",
        places: prevState.places.concat({
          key: uuid.v4(),
          name: prevState.placeName,
          image: {
            uri: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
          }
        })
      }
    })
  };

  handleItemSelected = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === key),
      }
    });
  };

  handleItemDeleted = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== prevState.selectedPlace.key),
        selectedPlace: null,
      }
    });
  };

  handleModalClose = () => {
    this.setState({selectedPlace: null});
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.handleItemDeleted}
          onModalClosed={this.handleModalClose}
        />
        <PlaceInput
          placeName={this.state.placeName}
          onPress={this.handlePlaceSubmit}
          onChangeText={this.handlePlaceNameChange}
        />
        <List
          places={this.state.places}
          onItemSelected={this.handleItemSelected}
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
