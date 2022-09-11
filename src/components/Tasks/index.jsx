import { IconsContainer, Task, TrashIconContainer } from "./styled"
import { Circle, Trash, CheckCircle } from "phosphor-react"
import { useState } from "react"



export const Tasks = ({ task, tasksCompleted, setTasksCompleted, tasksList, setTasksList, tasksCreated, setTasksCreated }) => {
    const [isTaskCompleted, setIsTaskCompleted] = useState(false)
    const [taskPositionInArray, setTaskPositionInArray] = useState(0)

    const onClickCompleted = (task) => {
        setIsTaskCompleted(!isTaskCompleted)

        const taskIndex = tasksList.findIndex((t) => t === task)
        
        const listCopy = [...tasksList]
        
        if (isTaskCompleted){
            listCopy.splice(taskIndex, 1)
            listCopy.splice(taskPositionInArray, 0, task)
            setTasksList(listCopy)
            setTasksCompleted(tasksCompleted - 1)
            
        } else {
            setTaskPositionInArray(taskIndex)
            listCopy.splice(taskIndex, 1)
            listCopy.push(task)
            setTasksList(listCopy)
            setTasksCompleted(tasksCompleted + 1)
        }
        
    }

    const onClickDelete = (task) => {
        const tasksWithoutCompleted = tasksList.filter((t) => {return t !== task})

        setTasksCreated(tasksCreated - 1)

        if (isTaskCompleted){
            setTasksCompleted(tasksCompleted - 1)
        } 

        setTasksList(tasksWithoutCompleted)

    }

    return(
        <Task> 
            <IconsContainer onClick={() => onClickCompleted(task)} isTaskCompleted={isTaskCompleted}>
                { isTaskCompleted ? <CheckCircle size={24} weight="fill"/> : <Circle size={24} />}
            </IconsContainer>
                
            <p isTaskCompleted={isTaskCompleted}>{task}</p>
         
            <TrashIconContainer onClick={() => onClickDelete(task)}>
                <Trash size={24}/>
            </TrashIconContainer>
        </Task>
    )
}