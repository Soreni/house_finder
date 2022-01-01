import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

import CardComponent from '../components/Card';
import * as houseAction from '../redux/actions/houseAction';




const Homelist = props => {
    const dispatch = useDispatch();
    console.log("test home");

    const {houses} = useSelector(state => state.house)

    useEffect(()=>{
   
        dispatch(houseAction.fecthHouses());
       
    },[dispatch]);
    return (
       <View style={styles.container}>
           <FlatList
           data={houses}
           keyExtractor={item=>item._id}
           renderItem={({item})=>(
            <CardComponent
            navigation={props.navigation}
            title= {item.unitStructure}
            houseType={item.houseType}
            price= {item.price}
            address= {item.address}
            description={item.description}
            image={item.image}
            localAreaName = {item.localAreaName}

            />
           )}
           />
         
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