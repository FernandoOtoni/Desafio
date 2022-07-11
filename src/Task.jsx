import { useState } from 'react'
import styles from './Task.module.css'

export function Task(props){

  const [ tasks,setTask ] = useState([
    1,
    2,
  ])

  return (
    <form  className={styles.task}>
      <input type="checkbox" />
      <div>{props.content}</div>
      <img src="" alt="" />
    </form>
  )
  // onSubmit={handleCreateNewTask}
}