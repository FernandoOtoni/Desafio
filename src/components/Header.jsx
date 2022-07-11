import styles from "./Header.module.css"

console.log(styles)

export function Header(){
  return (
    <header className={styles.header} >
      <img src="../../assets/headerLogo.svg" alt="" />
    </header>
    
  )
}