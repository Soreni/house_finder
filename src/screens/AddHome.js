import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Image, View, Button, Switch, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
const jwtDecode = require('jwt-decode');

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
  ExtraText,
  ValidationMsg,
} from '../components/styles';

const { darkLight, brand, primary, green } = Colors;

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import useLocation from '../hooks/useLocation';
import ImageInputList from '../components/ImageInputList';

//import house action
import * as houseAction from '../redux/actions/houseAction';

const formSchema = yup.object({
  houseType: yup.string().required(),
  unitStructure: yup.string().required(),
  price: yup.number().required(),
  houseNumber: yup.string().required(),
  //images: yup.array().min(1, 'Please select at least one image'),
  isFurnished: yup.boolean(),
  localAreaName: yup.string().min(3).max(50).required(),
  description: yup.string().required().min(10).max(100),
});
const AddHome = (props) => {
  const dispatch = useDispatch();
  const gpsLocation = useLocation();
  const [postedBy, setPostedBy] = useState();
  const [imageUris, setImageUris] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [token, setToken] = useState();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
    const decode = jwtDecode(token);
    setPostedBy(decode._id);
    return decode;
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (gpsLocation) {
    text = JSON.stringify(gpsLocation.longitude);
  }

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
    console.log(uri);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <Formik
            initialValues={{
              houseType: '',
              unitStructure: '',
              price: '',
              images: [],
              houseNumber: '',
              isFurnished: false,
              localAreaName: '',
              description: '',
              postedBy: '',
              GPSLocation: {},
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              //console.log(values);
              values.postedBy = postedBy;

              imageUris.forEach((imageUri) => values.images.push(imageUri));
              values.GPSLocation = {
                altitude: gpsLocation.altitude,
                longitude: gpsLocation.longitude,
                latitude: gpsLocation.latitude,
              };
              dispatch(houseAction.createHouses(values))
                .then((result) => {
                  console.log(result);
                  Toast.show({
                    topOffset: 60,
                    type: 'success',
                    text1: 'Registration Succeeded',
                    text2: 'Redirect to House List',
                  });

                  props.navigation.navigate('HomeList');
                  actions.resetForm();
                })
                .catch((err) => {
                  console.log(err);
                  Toast.show({
                    topOffset: 60,
                    type: 'error',
                    text1: 'Something went wrong',
                    text2: 'Please try again',
                  });
                });
            }}
          >
            {(props) => (
              <StyledFormArea>
                <ImageInputList
                  imageUris={imageUris}
                  onDeleteImage={(uri) => handleRemove(uri)}
                  onAddImage={(uri) => handleAdd(uri)}
                />
                <View style={{ marginTop: 10, marginBottom: 20 }}>
                  <Picker
                    enabled={true}
                    mode="dropdown"
                    onValueChange={props.handleChange('houseType')}
                    selectedValue={props.values.houseType}
                  >
                    <Picker.Item label="Select House Type" color="dark" value="" />
                    <Picker.Item label="Flat" value="Flat" />
                    <Picker.Item label="Condominium" value="Condominium" />
                    <Picker.Item label="Compound" value="Compound" />
                    <Picker.Item label="Apartment" value="Apartment" />
                  </Picker>
                </View>
                <ValidationMsg>{props.touched.houseType && props.errors.houseType}</ValidationMsg>
                <View style={{ marginTop: 10, marginBottom: 20 }}>
                  <Picker
                    enabled={true}
                    mode="dropdown"
                    onValueChange={props.handleChange('unitStructure')}
                    selectedValue={props.values.unitStructure}
                  >
                    <Picker.Item label="Select Unit Structure" color="dark" value="" />
                    <Picker.Item label="1 Bed Room" value="1 Bed Room" />
                    <Picker.Item label="2 Bed Room" value="2 Bed Room" />
                    <Picker.Item label="3 Bed Room" value="3 Bed Room" />
                    <Picker.Item label="4 Bed Room" value="4 Bed Room" />
                    <Picker.Item label="Studio" value="Studio" />
                    <Picker.Item label="Single Room" value="Single" />
                  </Picker>
                </View>
                <ValidationMsg>{props.touched.unitStructure && props.errors.unitStructure}</ValidationMsg>
                <MyTextInput
                  keyboardType="numeric"
                  icon="attach-money"
                  placeholder="Rent Price"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('price')}
                  onBlur={props.handleBlur('price')}
                  value={props.values.price}
                />
                <ValidationMsg>{props.touched.price && props.errors.price}</ValidationMsg>

                <MyTextInput
                  icon="house"
                  placeholder="House Number"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('houseNumber')}
                  onBlur={props.handleBlur('houseNumber')}
                  value={props.values.houseNumber}
                />
                <ValidationMsg>{props.touched.houseNumber && props.errors.houseNumber}</ValidationMsg>
                <MyTextInput
                  icon="my-location"
                  placeholder="Local Area Name"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('localAreaName')}
                  onBlur={props.handleBlur('localAreaName')}
                  value={props.values.localAreaName}
                />
                <ValidationMsg>{props.touched.localAreaName && props.errors.localAreaName}</ValidationMsg>
                <MyTextInput label={text} placeholder={text} />

                <MyTextInput
                  icon="description"
                  placeholder="Description"
                  placeholderTextColor={darkLight}
                  multiline={true}
                  onChangeText={props.handleChange('description')}
                  onBlur={props.handleBlur('description')}
                  value={props.values.description}
                />
                <ValidationMsg>{props.touched.description && props.errors.description}</ValidationMsg>
                <StyledButton>
                  <ButtonText onPress={props.handleSubmit}>Add Home</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
        <View>
          <ExtraText></ExtraText>
        </View>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, ...probs }) => {
  return (
    <View>
      <LeftIcon>
        <MaterialIcons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledTextLabel>{label}</StyledTextLabel>
      <StyledTextInput {...probs} />
    </View>
  );
};

export default AddHome;
