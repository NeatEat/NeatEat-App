import * as React from 'react';
import { View, Text } from 'react-native';

export function CameraScreen() {
	return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Camera Screen</Text>
      <Text>Camera Screen</Text>
      <Text>Camera Screen</Text>
      {/*<Button title="Go to Second Screen" onPress={() => props.navigation.navigate('SecondScreen')} />*/}
    </View>
	);
}