import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View, CheckBox,Switch,Text,Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Slider} from 'react-native-elements'
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import * as yup from 'yup';
import AsyncStorage  from '@react-native-async-storage/async-storage';
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
    MsgBox,
    Line,
    TextLinkContent,
    TextLink,
    ExtraView,
    ExtraText,
    ValidationMsg,


} from '../components/styles';

const { darkLight, brand, primary, green } = Colors;

//keyboard avoiding view 
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import UploadImage from '../components/UploadImage';

//import house action
import * as houseAction from '../redux/actions/houseAction';

const formSchema = yup.object({
  houseType: yup.string().required(),
  unitstructure: yup.string().required(),
  price: yup.number().required(),
  houseNumber:yup.string().required(),
  isFurnished:yup.boolean(),
  localAreaName:yup.string().min(3).max(50).required(),
  description: yup.string().required().min(10).max(100),
  
})
const AddHome = ()=>{

  const dispatch = useDispatch();
  const [postedBy, setPostedBy] = useState();
  const [token, setToken] = useState();

  const loadProfile = async ()=>{
    const token =  await AsyncStorage.getItem('token');
    setToken(token);
    const decode = jwtDecode(token);
    setPostedBy(decode._id);
    console.log(postedBy);
    return decode;

 }
 useEffect(()=>{
     loadProfile();

 })



    let _houseType = [{
        value: 'Flat',
      }, {
        value: 'Condominium',
      }, {
        value: 'Compund',
      }, {
        value: 'Apartment',
      }];
    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>

                         
                <Formik initialValues={{ 
                  houseType: '',
                  unitstructure: '',
                  price: '',
                  image:'',
                  houseNumber:'',
                  isFurnished:false,
                  localAreaName: '',
                  description: '',
                  postedBy: '',
                  GPSLocation: '',
                 }}
                 validationSchema= {formSchema}
                         
                 onSubmit={(values)=>{
                          values.postedBy = postedBy;

                          console.log(`before dispatch${values}`)
                          console.log(values);
                       dispatch(houseAction.createHouses(values))
                          .then( ()=>{                      
                              console.log(result);
                              Alert.alert('House Registered Successfully');
                              navigation.navigate("HomeList");
                            })

                            .catch(()=>{
                              Alert.alert('An Error has Occured', [{text:'Ok'}]);
                            });
                }}     
                >     
                {(props) => (
                <StyledFormArea>
                 
                  <View style={{ marginTop: 10,marginBottom: 20}}>
                  <Picker
                  enabled={true} 
                  mode="dropdown"                  
                  onValueChange={props.handleChange('houseType')}
                  selectedValue={props.values.houseType
                  }>
                  <Picker.Item label="Select House Type" color='dark' value="" />
                  <Picker.Item label="Flat" value="flat" />
                  <Picker.Item label="Condominium" value="condominium" />
                  <Picker.Item label="Compund" value="compund" />
                  <Picker.Item label="Apartment" value="apartment" />
                  </Picker> 
                 </View>
                 <ValidationMsg>{props.touched.houseType && props.errors.houseType}</ValidationMsg>
                 <View style={{ marginTop: 10,marginBottom: 20}}>              
                  <Picker
                  enabled={true} 
                  mode="dropdown"
                  placeholder="Select Unit Structure "
                  onValueChange={props.handleChange('unitstructure')}
                  selectedValue={props.values.unitstructure
                  }>
                  <Picker.Item label="Select Unit Structure" color='dark' value="" />
                  <Picker.Item label="1 Bed Room" value="1 Bed Room" />
                  <Picker.Item label="2 Bed Room" value="2 Bed Room" />
                  <Picker.Item label="3 Bed Room" value="3 Bed Room" />
                  <Picker.Item label="4 Bed Room" value="4 Bed Room" />
                  <Picker.Item label="Studio" value="Studio" />
                  <Picker.Item label="Single Room" value="Single" />
                  </Picker>
                 </View>
                 <ValidationMsg>{props.touched.unitstructure && props.errors.unitstructure}</ValidationMsg>
                 <MyTextInput
                  keyboardType='numeric'
                  icon='attach-money'
                  placeholder="Rent Price"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('price')}
                  onBlur={props.handleBlur('price')}
                  value={props.values.price}/>
                  <ValidationMsg>{props.touched.price && props.errors.price}</ValidationMsg>
                 <UploadImage 
                  onChangeText={props.handleChange('image')}
                  onBlur={props.handleBlur('image')}
                  value={props.values.image}
                 />
                 <MyTextInput
                  icon = 'house'
                  placeholder="House Number"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('houseNumber')}
                  onBlur={props.handleBlur('houseNumber')}
                  value={props.values.houseNumber}
                  />   
                 <ValidationMsg>{props.touched.houseNumber && props.errors.houseNumber}</ValidationMsg>
                 <MyTextInput
                  
                  icon= "my-location"
                  placeholder= "Local Area Name"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('localAreaName')}
                  onBlur={props.handleBlur('localAreaName')}
                  value={props.values.localAreaName}/>
                  <ValidationMsg>{props.touched.localAreaName && props.errors.localAreaName}</ValidationMsg>
             
                 <MyTextInput
                  
                  icon= "description"
                  placeholder= "Description"
                  placeholderTextColor={darkLight}
                  multiline={true}
                  onChangeText={props.handleChange('description')}
                  onBlur={props.handleBlur('description')}
                  value={props.values.description}/>
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
}

const MyTextInput = ({ label, icon, ...probs }) => {
  return (
      <View>
          <LeftIcon>
        
              <MaterialIcons name={icon} size={30} color={brand} />
          </LeftIcon>
          <StyledTextLabel >{label}</StyledTextLabel>
          <StyledTextInput {...probs} />
      </View>


  );
};


export default AddHome;