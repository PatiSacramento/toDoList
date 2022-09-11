import Clipboard from "./../../assets/Clipboard.png"
import { TasksListContainer, ClipboardImage, TextsContainer, TextEmptyList } from "./styled"



export const EmptyTaskList = () => {
    return (
        <TasksListContainer>
            <ClipboardImage src={Clipboard} /> 
            <TextsContainer>
                <TextEmptyList><b>Você ainda não tem tarefas cadastradas</b></TextEmptyList>
                <TextEmptyList>Crie tarefas e organize seus itens a fazer</TextEmptyList>
            </TextsContainer>
        </TasksListContainer>
    )
}