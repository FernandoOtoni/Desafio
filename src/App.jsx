import { SearchBar } from "./SearchBar"
import { Task } from "./Task"
import { Header } from "./components/Header"
import styles from "./Task.module.css"

import "./global.css"
import { TaskManager } from "./TaskManager"

const tasks = [
  {
    id: 1,
    content: "Lavar as roupas"
  },
  {
    id: 2,
    content: "Cozinhar"
  }
]

export function App() {

  return (
    <div>
      <Header />
      <SearchBar />
      <TaskManager/>
      <main className={styles.taskContainer}>
        {tasks.map(post =>{
          return <Task content={post.content}/>
        })}
        
      </main>
      
    </div>
    
  )

  
}

