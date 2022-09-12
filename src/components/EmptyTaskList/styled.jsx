import styled from "styled-components";

export const TasksListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 1.5rem;
    box-sizing: border-box;
    width: 46rem;
    height: 15.25rem;
    gap: 0.75rem;
    
    border-top: 1px solid ${props => props.theme.colors.gray[400]};
    border-radius: 8px;
`

export const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 43rem;
    height: 2.75rem;
    line-height: 140%;
`

export const ClipboardImage = styled.img` 
    margin-bottom: 1rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const TextEmptyList = styled.p` 
    font-weight: 400;   
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.gray[300]};
`