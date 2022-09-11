import styled from "styled-components";


export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 46rem;
    min-height: 28.1875rem;
    gap: 1.5rem;
    box-sizing: border-box;
    
    position: absolute;
    left: calc(50% - 46rem/2);
    top: 18.1875rem;

`

export const TasksCount = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 46rem;
    height: 1.1875rem;
    gap: 1.5rem;
    
`

export const Counter = styled.span` 
    display: flex;
    align-items: center;
    width: 8.625rem;
    height: 1.1875rem;
    padding: 0;
    gap: 0.5rem;
    
    flex-grow: ${props => props.completed ? "0" : "1"};
`

export const Text = styled.p` 
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.purple ? props.theme.colors.purple : props.theme.colors.blue};
`

export const TextCounter = styled(Text)` 
    display: flex;
    flex-direction: ${props => props.tasksCreated !== 0 ? "column" :"row"};
    justify-content: center;
    align-items: center;
    
    background-color: ${props => props.theme.colors.gray[400]}; 
    color: ${props => props.theme.colors.gray[200]};
    width:${props => props.created ? "3.3rem" : "1.5625rem"};
    height: 1.1875rem;
    
    border-radius: 999px;
    padding: 0.125rem 0.5rem;
    font-size: ${props => props.theme.fontSizes.small};
    word-break: keep-all;
 
`

export const TasksListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    box-sizing: border-box;
    width: 46rem;
    height: 15.25rem;
    gap: 0.75rem;
    
    border-top: 1px solid ${props => props.theme.colors.gray[400]};
    border-radius: 0.5rem;
`
