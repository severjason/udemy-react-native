import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    placeName: "",
  };

  handlePlaceNameChange = val =>
    this.setState({
      placeName: val,
    });

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="placeholder"
          onChangeText={this.handlePlaceNameChange}
          value={this.state.placeName}/>
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={() => {
            this.props.onPress(this.state.placeName);
            this.setState({placeName: ""})
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
	inputContainer: {
		// flex: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: 'center',
	},
	placeInput: {
		width: "70%",
	},
	placeButton: {
		width: "30%",
	}
});

export default PlaceInput;
