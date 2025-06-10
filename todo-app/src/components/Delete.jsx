import React from 'react'

const Delete = ({ todos, setTodos, index}) => {

  // index=선택할 요소
  // 선택한 요소(index)를 제외하고 나머지 todos로 배열을 새로 생성해야함
  // 새로운 배열 => newTodos
  
  const deleteContent = () => {
    const newTodos = todos.filter((_,i)=> i !==index);
    // index가 아닌 항목만 남기기
    // 현재 요소의 순번(i)이 삭제하려는 순번과 같지 않다면 그 요소는 남길것
    // filter함수는 알아서 번호를 매겨 값을 처리해줌
    setTodos(newTodos);
    // _ : 배열 요소의 자체(ex)공부하기 같은 문자열 필요x
    // i : 요소의 순번(인덱스) 필요
    // => 요소는 안쓰고 인덱스만 사용할 것
  }

 // [Delete.jsx]
// 1.ToDo 컴포넌트에서 전달받은(props) 데이터 구조 분해 -> state, setState, 선택 요소 index
// 2.삭제버튼이 클릭되었을 때 실행되는 함수 deleteContent 생성
// 2-1. filter 함수를 통해 선택한 항목을 제외한 나머지 항목으로 배열 생성
// 2-2. 새롭게 생성된 배열을 setTodos 를 통해 todos 에 반영

  return (
   
      <button onClick={deleteContent}>삭제</button>
     )
}

export default Delete