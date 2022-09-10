import { Container, TasksCount, Text, TasksListContainer, TextEmptyList, TextsContainer, ClipboardImage, Counter, TextCounter } from "./styled"
import Clipboard from "./../../assets/Clipboard.png"
import { Tasks } from "./../Tasks"
import { useState } from "react"




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
            {tasksList && tasksList.length !== 0 ? 
            <TasksListContainer tasksCreated={tasksCreated}>
                {tasksList.map((task) => { 
                    return <Tasks 
                                key={task} 
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
            <TasksListContainer tasksCreated={tasksCreated}>
                <ClipboardImage src={Clipboard} /> 
                <TextsContainer>
                    <TextEmptyList><b>Você ainda não tem tarefas cadastradas</b></TextEmptyList>
                    <TextEmptyList>Crie tarefas e organize seus itens a fazer</TextEmptyList>
                </TextsContainer>
            </TasksListContainer>}
        </Container>
    )
}