import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const PlaceInput = (props) => (
	<View style={styles.inputContainer}>
		<TextInput
			style={styles.placeInput}
			placeholder="placeholder"
			onChangeText={props.onChangeText}
			value={props.placeName}/>
		<Button
			title="Add"
			style={styles.placeButton}
			onPress={props.onPress}
		/>
	</View>
);

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
		width: "30&",
	}
});

export default PlaceInput;
