import styled from 'styled-components';

export const Container = styled.header`
    background-color: ${props => props.theme.palette.secundary};
    height: 48px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: #a3a3a3 0px 0px 5px;
    width: 100vw;

    img {
        height: 16px;
    }
`;