import React, { useRef, useState } from 'react'
import CheckBox from './CheckBox';
import Delete from './Delete';
import Update from './Update';
import TopMove from './TopMove';
import BottomMove from './BottomMove';

const Todo = () => {

  // Todo
  // - 사용자가 등록한 업무를 보관할 배열 생성(state)
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

  const addTodo = (e) => {
    e.preventDefault();
    let todo = inputRef.current.value;
    //todos.push(todo);
    //setTodos(todos);

    // concat: 새로운 배열로 생성이 되기 때문에 
    // React에서는 권장하지 않는다.
    // setTodos(todos.concat(todo));
    setTodos([...todos, {text:todo,isChecked:false}]);

  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form onSubmit={addTodo}>
          <input type="text" ref={inputRef} />
          <input type="submit" value="등록"/>
        </form>
      </div>

      <div>
        {todos.map((item, index)=>(       
            <p key={index}>{index+1}.{item}
            <CheckBox item={item} todos={todos} setTodos={setTodos} index={index}/>
            <TopMove todos={todos} setTodos={setTodos} index={index}/>
            <BottomMove todos={todos} setTodos={setTodos} index={index}/>
            <Update index ={index} todos = {todos} setTodos = {setTodos}/>
            <Delete todos={todos} setTodos={setTodos} index={index}/>
            </p>
        ))}
        
      </div>
    </div>
  )
}

export default Todo