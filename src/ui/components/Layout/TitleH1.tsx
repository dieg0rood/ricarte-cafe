import styled from "styled-components";

const Title = styled.h1`
    width: 100%;
    max-width: 1210px;
    min-width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding-top:20px;
    padding-bottom:20px;
    font-size:40px;
`;

const TitleContainer = styled.div`
    color:white;
    background-color:#D08339;
    width:100%;
`;

export default function TitleH1 ({ LabelTitle }){
    return (
        <TitleContainer>
            <Title>{LabelTitle}</Title>
        </TitleContainer>
        
    );
}