import {React,useState,useRef} from 'react'

const CheckBox = ({item,todos,setTodos,index}) => {

  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    setTodos(todos.map((todo,idx)=> idx === index ? {...todo,isChecked:isChecked}:todo))
  }

  return (
    <div>
      <input type="checkbox" checked={item.isChecked} onChange={handleCheck} />
      {index+1}.{item.isChecked ? <del>{item.text}</del> : <span>{item.text}</span>}
    </div>
  )
}

export default CheckBox