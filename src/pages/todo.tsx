import styles from '../styles/todo.module.css'

interface Item {
  todo: {
    map(arg0: (e: any) => JSX.Element): import("react").ReactNode;
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
}

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todo = await data.json()

    return {
      props: { todo }
    }
}

function Todo({ todo }: Item) {
  return (
    <>
      <h1>Tarefas</h1>
      <ul className={styles.todolist}>
        {
          todo.map((e) => (
            <li key={e.id}>{e.id} - {e.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Todo
