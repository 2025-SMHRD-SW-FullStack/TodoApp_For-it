import React from 'react'

const BottomMove = ({todos, setTodos, index}) => {
  // 1.ToDo 컴포넌트에서 전달받은(props) 데이터 구조 분해 -> state, setState, 선택 요소 index
  // 2.현재 항목을 맨 밑으로 이동시키는 함수 moveBottom 생성
  // 2-1. 현재 항목을 제외한 나머지 항목을 filter()로 뽑아내기
  // 2-2. filter()를 통해 얻어진 배열에 현재 선택한 항목(checkIdx)을 추가(push) 후 setTodos

    const moveBottom = () => {
      const select = [todos[index]];
  
      const others = todos.filter((_, i) => i !== index);
      
      // const newTodos = []
      // newTodos.push(others);
      // newTodos.push(select);
   
       const newTodos = [ ...others, ...select];

      setTodos(newTodos);
    }


  return (
    <button onClick={moveBottom}>맨 아래로</button>
  )
}

export default BottomMove