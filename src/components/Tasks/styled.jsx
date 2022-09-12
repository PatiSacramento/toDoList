import styled from "styled-components";

export const Task = styled.div`
    width: 46rem;
    height: 4.5rem;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;

    border-radius: 8px;
    padding: 1rem;
    background-color: ${props => props.theme.colors.gray[500]};
    border: 1px solid  ${props => props.theme.colors.gray[400]};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    position: relative;

    p {
        font-weight: 400;
        font-size: ${props => props.theme.fontSizes.medium};
        color: ${props => props.isTaskCompleted ? props.theme.colors.gray[300] : props.theme.colors.gray[100]};
        text-decoration: ${props => props.isTaskCompleted ? "line-through" : "none"};
        line-height: 140%;
        padding: 0 0.75rem;
        word-wrap: break-word;
    }
    
`

export const IconsContainer = styled.span`
    color: ${props => props.isTaskCompleted ? props.theme.colors.purple : props.theme.colors.blue };
`

export const TrashIconContainer = styled(IconsContainer)`
    color: ${props => props.theme.colors.gray[300]};
    padding-right: 1rem;
    position: absolute;
    top: 1rem;
    left: 43.5rem;
`


