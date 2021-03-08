import styled from "styled-components";

export const HeaderPage = styled.div`
    position: absolute;
    background:  ${(props) => props.theme.colors.bgLight};
    height: 12vh;
    padding: 2%;
    width: 100%;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    h1 {
        font-size: 1.8em;
        color: ${(props) => props.theme.colors.text};
        font-family: "Source Sans Pro";
        font-weight: bold;
    }
`;

export const BottomBar = styled.div`
    position: fixed;
    background:  ${(props) => props.theme.colors.bgLight};
    height: 12vh;
    padding: 2%;
    width: 100%;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
`;