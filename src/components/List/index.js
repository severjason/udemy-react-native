import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem';

const List = (props) => {
	return (
		<FlatList
      style={styles.listContainer}
			data={props.places}
			renderItem={info => (
        <ListItem
          placeName={info.item.name}
					placeImage={info.item.image}
          onItemPress={() => props.onItemSelected(info.item.key)}
        />
			)}
		/>
	)
};

export default List;

const styles = StyleSheet.create({
	listContainer: {
	width: "100%"
}
});