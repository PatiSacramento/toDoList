import { PlusCircle } from "phosphor-react"
import { Button, InputContainer, InputTask } from "./styled"




export const TaskInput = ({ task, onChangeInput, addTask}) => {

    return (
        <InputContainer onSubmit={addTask}>
            <InputTask 
                placeholder="Adicione uma nova tarefa"
                value={task}
                onChange={onChangeInput}
            />
            <Button type="submit">
                Criar
                <PlusCircle />
            </Button>
        </InputContainer>
    )
}