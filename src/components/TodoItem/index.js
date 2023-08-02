// Write your code here
import React from 'react'

import './index.css'

const TodoItem = props => {
  const {details, deleteTodoItem} = props
  const {id, title} = details

  const handleClick = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="list-container">
      <p>{title}</p>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
