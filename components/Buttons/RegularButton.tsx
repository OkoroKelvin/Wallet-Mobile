import React, { Children } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "./../Texts/RegularText";
import { GestureResponderEvent, StyleProp,TextStyle,ViewStyle } from "react-native";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;



const RegularButton = (props: {btnStyles?: any;textStyles?: any;children: React.ReactNode;onPress: any}) => {
  return (
    <ButtonView onPress={props.onPress} style={{ ...props.btnStyles }}>
      <RegularText textStyles={{ ...props.btnStyles }}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default RegularButton;
