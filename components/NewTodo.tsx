import React, {useRef} from 'react';
import './NewTodo.css';

type NewTodoProps ={
    onAddTodo:(todoText:string)=>void;

}

const NewTodo: React.FC<NewTodoProps> = props =>{
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler =(event: React.FormEvent)=>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };



    return(
    <form onSubmit={todoSubmitHandler}>
        <div className='form-control'>
            <label htmlFor='todo-text'>Todoの内容</label>
                <input type='text' id='todo-text' ref={textInputRef}></input>
        </div>
        <button type='submit'>Todo追加</button>
    </form>
    );
    };

export default NewTodo;