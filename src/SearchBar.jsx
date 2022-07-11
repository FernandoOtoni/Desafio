import styles from './SearchBar.module.css'
// import { tasks } from './Task.jsx'


export function SearchBar(props){

  function handleCreateNewTask(){
    event.preventDefault()

    tasks.push(3)
    console.log(tasks)
  }

  return (
    <div >
      <form className={styles.searchContainer} 
            onSubmit={handleCreateNewTask}>
        <input 
          className={styles.searchBar} 
          type="text" 
          placeholder="Adicione uma nova tarefa"/>
        <button 
          type='submit' 
          className={styles.searchButton}>Criar</button>
        <img src="" alt="" />
      </form>
      
    </div>
  )
}