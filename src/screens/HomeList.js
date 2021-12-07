import React,{useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

import CardComponent from '../components/Card';




const Homelist = props => {
    return (
       <View style={styles.container}>
          <CardComponent
          navigation={props.navigation}/>
          <FloatingAction 
                position="right"
                animated={false}
                showBackground={false}
                onPressMain={() => props.navigation.navigate('AddHome')}
            />
        </View>
         
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default Homelist;