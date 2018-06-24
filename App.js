import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, PlaceInput } from './src/components/';

export default class App extends React.Component {
  state = {
    placeName:'',
    places: []
  };

  handlePlaceNameChange = val =>
		this.setState({
			placeName: val
		});

  handlePlaceSubmit = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        placeName: "",
        places: prevState.places.concat(prevState.placeName)
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is our first app!</Text>
        <PlaceInput
          placeName={this.state.placeName}
          onPress={this.handlePlaceSubmit}
          onChangeText={this.handlePlaceNameChange}
        />
        <List places={this.state.places}/>
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
