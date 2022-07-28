import React, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { Container } from "../components/shared";
import { colors } from "../components/colors";

const HomeContainer = styled(Container)`
    background-color:${colors.graylight};
    width: 100%;
    flex: 1;
`;
const Home: FunctionComponent = ()=>{
    return (
        <HomeContainer>
            
        </HomeContainer>

    );
};

export default Home;