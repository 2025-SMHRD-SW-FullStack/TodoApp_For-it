import React from 'react'

const CheckBox = ({ todos, setTodos, index}) => {
const handleCheck = (e) => {
const isChecked = e.target.checked;


// isChecked : 이벤트가 발생한 현재 상태를 나타내는 boolean값을 나타내는 함수
// e 이벤트 객체가 가진 target(이벤트가 발생한 요소(체크박스))의 checked 속성값 가져옴(true인지)
}

  return (
    <div>
      <input type="checkbox" onChange={handleCheck}/>
    </div>
  )
}

export default CheckBox