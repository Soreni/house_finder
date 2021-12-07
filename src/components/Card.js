import { CardAnimationContext } from '@react-navigation/stack';
import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity} from 'react-native'; 
import { Card} from 'react-native-elements'

import { 
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea, 
    StyledTextInput,
    StyledTextLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    TextLinkContent,
    TextLink,
    ExtraView,
    ExtraText,
    ValidationMsg,
    PageBackground


 } from './styles';


 const CardComponent = props => {
    return(
        <TouchableOpacity
            onPress={() => props.navigation.navigate('HomeDetails')}
        >
            <View style={styles.card}>
                <View style={styles.titleContainer}>
                    <SubTitle >Modern 3-bedroom flat</SubTitle>
                </View>
                <View style={styles.imageContainer}>
                    <PageBackground source={require('../../assets/house.png')} style={styles.image}>
                        <Text style={styles.price}>$200,000</Text>
                        <View style={styles.year}>
                            <Text style={styles.yearText}>2020</Text>
                        </View>
                    </PageBackground>
                </View>
                <View style={styles.description}>
                    <StyledTextLabel>This is the description</StyledTextLabel>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 5,
        height: 300,
        margin: 10
      },
      titleContainer: {
        height: '15%',
        padding: 10
      },

      imageContainer: {
        width: '100%',
        height: '65%',
        overflow: 'hidden'
      },
      image: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      },
      price: {
        fontSize: 30,
        color: '#fff',
        margin: 10
      },
      year: {
        margin: 10,
        backgroundColor: '#2652B0',
        height: 25,
        width: 80,
        borderRadius: 5
      },
      yearText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
      },
      description: {
        margin: 10
      }
});

export default CardComponent;