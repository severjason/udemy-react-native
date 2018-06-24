import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem';

const List = (props) => {
	const places = props.places.map((place, index) => (
		<ListItem key={index} placeName={place}/>
	));
	return <View style={styles.listContainer}>
		{places}
	</View>
};

export default List;

const styles = StyleSheet.create({
	listContainer: {
	width: "100%"
}
});