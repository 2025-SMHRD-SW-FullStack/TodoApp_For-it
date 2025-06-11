import React, { useRef, useState } from 'react'

const Update = ({index,todos,setTodos}) => {

  

  // const inputVal = useRef("내용");
  const [isEditing,setIsEditing] = useState(false);
  const value = useRef();
  // const [clickHandle,setClickHandle] = useState();
  const handleUpdateClick =()=>{
  console.log(todos);
    if(!isEditing){
      setIsEditing(!isEditing)
      let chTodo =[...todos];
      chTodo[index].text = <input type='text' placeholder={todos[index].text} ref ={value}/>;
      setTodos(chTodo);
    }else{
      setIsEditing(!isEditing)
      let chTodo = [...todos];
      chTodo[index].text= value.current.value;
      setTodos(chTodo);
    }

  }




  return (
    <button onClick={handleUpdateClick} >{isEditing?"수정완료":"내용 수정하기"}</button>
  )
}

export default Update