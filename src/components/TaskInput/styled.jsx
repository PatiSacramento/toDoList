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

    input {
        width: 39.875rem;
        padding: 0 1rem;
        border-radius: 8px;
        height: 3.375rem;

        border: 1px solid ${props => props.theme.colors.gray[700]};
        background-color: ${props => props.theme.colors.gray[500]};
        font-family: "Inter";
        font-weight: "400";
        font-size: 1rem;
        line-height: 1.4rem;
        color: ${props => props.theme.colors.gray[300]}; 
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5.625rem;
        height: 3.375rem;
        padding: 1rem;
        gap: 0.5rem;
        border-radius: 8px;
        border: 0;

        background-color: ${props => props.theme.colors.blueDark};
        color: white;
        font-family: "Inter";

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background-color: ${props => props.theme.colors.purple};
        }
    }
`
