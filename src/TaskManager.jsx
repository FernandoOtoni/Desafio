import styles from './TaskManager.module.css'

export function TaskManager(){
  return(
    <div className={styles.TMContainer}>
      <div>
        <div>Tarefas criadas</div>
        <div>5</div>
      </div>
      <div>
        <div>Concluidas</div>
        <div>2 de 5</div>
      </div>
      
    </div>
  )
}