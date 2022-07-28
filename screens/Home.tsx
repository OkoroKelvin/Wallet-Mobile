import React, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import { StatusBar } from "expo-status-bar";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";


const HomeContainer = styled(Container)`
    background-color:${colors.graylight};
    width: 100%;
    flex: 1;
`;
const Home: FunctionComponent = ()=>{
    return (
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection navigation={undefined}/>
            <TransactionSection/>
        </HomeContainer>

    );
};

export default Home;