import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, PlaceInput } from './src/components/';
import uuid from 'uuid';

export default class App extends React.Component {
  state = {
    placeName:'',
    places: []
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
        places: prevState.places.concat({key: uuid.v4(), value: prevState.placeName})
      }
    })
  };

  handleItemDelete = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== key),
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          onPress={this.handlePlaceSubmit}
          onChangeText={this.handlePlaceNameChange}
        />
        <List
          places={this.state.places}
          onDeleteItem={this.handleItemDelete}
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
