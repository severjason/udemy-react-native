import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListItem = (props) => (
	<TouchableOpacity onPress={props.onItemPress}>
		<View style={styles.listItem}>
			<Text>
				{props.placeName}
			</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	listItem: {
		width: "100%",
		padding: 10,
		marginBottom: 5,
		backgroundColor: "#aaa",
	}
});

export default ListItem;