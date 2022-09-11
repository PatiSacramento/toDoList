import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    background-color: ${props => props.theme.colors.gray[700]};
    height: 12.5rem;
    width: 100%;
   
    img {
        margin-right: 0.75rem;
        max-width: 100%;
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


