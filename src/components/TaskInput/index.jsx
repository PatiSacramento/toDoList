import { PlusCircle } from "phosphor-react"
import { InputContainer } from "./styled"




export const TaskInput = ({ task, onChangeInput, addTask, isTaskEmpty}) => {
    
    return (
        <InputContainer onSubmit={addTask}>
            <input 
                placeholder="Adicione uma nova tarefa"
                value={task}
                onChange={onChangeInput}
                //required
            />
            <button type="submit" disabled={isTaskEmpty}>
                Criar
                <PlusCircle />
            </button>
        </InputContainer>
    )
}