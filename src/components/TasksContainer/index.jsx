import { Container, TasksCount, Text, TasksListContainer, Counter, TextCounter } from "./styled"
import { Tasks } from "./../Tasks"
import { useState } from "react"
import { EmptyTaskList } from "../EmptyTaskList"




export const TasksContainer = ({ tasksList, tasksCreated, setTasksList, setTasksCreated }) => {
    const [tasksCompleted, setTasksCompleted] = useState(0)
 

    return(
        <Container>
           <TasksCount>
                <Counter>
                    <Text>Tarefas criadas</Text>
                    <TextCounter>{tasksCreated}</TextCounter>
                </Counter>
                <Counter completed>
                    <Text purple>Concluídas</Text>
                    {tasksCreated !== 0 ? 
                        <TextCounter created>{tasksCompleted} de {tasksCreated}</TextCounter>
                        :
                        <TextCounter>{tasksCompleted}</TextCounter>
                    }
                </Counter>    
            </TasksCount>
            {tasksList.length !== 0 ? 
                <TasksListContainer>
                    {tasksList.map((task) => { 
                        return <Tasks 
                                    key={task.id} 
                                    task={task} 
                                    tasksCompleted={tasksCompleted} 
                                    setTasksCompleted={setTasksCompleted} 
                                    tasksList={tasksList} 
                                    setTasksList={setTasksList}
                                    tasksCreated={tasksCreated}
                                    setTasksCreated={setTasksCreated}  
                                />})}
                </TasksListContainer> 
                :
                <EmptyTaskList />}
        </Container>
    )
}