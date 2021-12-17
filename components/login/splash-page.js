import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);

	useEffect(() => {
    setTimeout(() => {
		setAnimating(false);
		AsyncStorage.getItem('userInfo').then((value) =>
        navigation.replace(value === null ? 'login' : 'homeTab'),
		);
    }, 3000);
	}, []);

	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/favicon.png')}
				style={{width: '100%', resizeMode: 'contain', margin: 30}}
			/>
			<ActivityIndicator
				animating={animating}
				color="#00cccc"
				size="large"
				style={styles.activityIndicator}
			/>
		</View>
	);
};

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
	},
	activityIndicator: {
		alignItems: 'center',
		height: 80,
	},
});