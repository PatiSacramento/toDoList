import styled from "styled-components";


export const InputContainer = styled.form` 
    display: flex;
    align-items: center;
    width: 46rem;
    height: 3.375rem;
    gap: 0.5rem;

    position: absolute;
    left: calc(50% - 46rem/2);
    top: 11rem;
`

export const InputTask = styled.input`
    width: 39.875rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    height: 3.375rem;

    border: 1px solid ${props => props.theme.colors.gray[700]};
    background-color: ${props => props.theme.colors.gray[500]};
    font-family: "Inter";
    font-weight: "400";
    font-size: 1rem;
    line-height: 1.4rem;
    color: ${props => props.theme.colors.gray[300]}; 
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.625rem;
    height: 3.375rem;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 0;

    background-color: ${props => props.theme.colors.blueDark};
    color: white;
    font-family: "Inter";

`