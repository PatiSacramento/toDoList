import { Header } from "../components/Header"
import { TaskInput } from "../components/TaskInput"
import { TasksContainer } from "../components/TasksContainer"
import { useState } from "react"
import { PageContainer } from "./styled"



export const Page = () => {
    const [task, setTask] = useState("")
    const [tasksList, setTasksList] = useState([])
    const [tasksCreated, setTasksCreated] = useState(0)
    const isTaskEmpty = task.length === 0

    const onChangeInput = (event) => {
        setTask(event.target.value)
    }

    const addTask = (event) => {
        event.preventDefault()
        let newTasksList = [...tasksList]

        newTasksList.push(task)
        setTasksList(newTasksList)
        setTasksCreated(tasksCreated+1)
        setTask("")
    }

    return(
        <PageContainer>
            <Header/>
            <TaskInput 
                task={task} 
                onChangeInput={onChangeInput} 
                addTask={addTask}
                isTaskEmpty={isTaskEmpty}
            />
            <TasksContainer 
                tasksList={tasksList} 
                tasksCreated={tasksCreated} 
                setTasksList={setTasksList}
                setTasksCreated={setTasksCreated}
            /> 
    
        </PageContainer>
    )
}