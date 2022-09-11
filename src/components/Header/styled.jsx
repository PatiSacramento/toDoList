import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    background-color: ${props => props.theme.colors.gray[700]};
    min-width: 100%;
    height: 12.5rem;
   
    img {
        margin-right: 0.75rem;
    }

    h1 {
        font-weight: 900;
        font-size: 2.5rem;
        line-height: 3.025rem;
        color: ${props => props.theme.colors.blue};
    }

    h1:last-child {
        color: ${props => props.theme.colors.purple};
    }
`


