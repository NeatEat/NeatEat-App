import * as React from 'react';
import { Component, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import { SearchBar } from 'react-native-elements';


const ViewStyle = {
	flex: 1, 
	alignItems: 'center', 
	justifyContent: 'center',
	padding: 10
}


// export default class SearchScreen extends React.Component {
export function SearchScreen(props) {
	const [text, setText] = useState('');
	// state = {search: '',}
	// updateSearch = search => { this.setState({search})}

	return (
		 <View style={ViewStyle}>
		 	<Text>Search Screen</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Search here"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

      <Button title="Search" onPress={() => props.navigation.navigate('Directory')} />
		 </View>
	);

}