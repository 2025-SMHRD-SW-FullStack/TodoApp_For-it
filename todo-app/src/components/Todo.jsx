import React, { useRef, useState } from 'react'

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
    setTodos([...todos, todo]);

  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form>
          <input type="text" ref={inputRef} />
          <input type="submit" value="등록" onClick={addTodo}/>
        </form>
      </div>

      <div>
        {todos.map((item, index)=>(
          <p key={index}>{index+1}.{item}</p>
        ))}
      </div>
    </div>
  )
}

export default Todo