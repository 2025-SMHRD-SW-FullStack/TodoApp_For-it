import React from 'react'

const TopMove = ({todos, setTodos, index}) => {

  // 1.ToDo 컴포넌트에서 전달받은(props) 데이터 구조 분해 -> state, setState, 선택 요소 index
  // 2.현재 항목을 맨 위로 이동시키는 함수 moveTop 생성
  // 2-1. 현재 항목만 배열로 뽑아내기
  // 2-2. 현재 항목만 있는 배열에 현재 선택한 항목를 제외한 나머지를 filter로 뽑아서 push을 통해 추가
  // 2-3. 최종적으로 만들어진 배열을 setTodos

  
  
  const moveTop = () => {
    const select = [todos[index]];
  
    const others = todos.filter((_, i) => i !== index);
    const newTodos = [...select, ...others];
    
    
    setTodos(newTodos);

  }

  return ( 
      <button onClick={moveTop}>맨 위로</button>
  )
}

export default TopMove