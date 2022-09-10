import styled from "styled-components";


export const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    background-color: ${props => props.theme.colors.gray[700]};
    width: 100%;
    height: 12.5rem;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4.5rem 41.06rem 5rem;
`

export const RocketImage = styled.img`
    margin-right: 0.75rem;
`

export const Title = styled.h1`
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 3.025rem;
    color: ${props => props.purple ? props.theme.colors.purple : props.theme.colors.blue};
`
